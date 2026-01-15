// Claude API Integration for PM Simulator

export async function generateAIFeedback(weekNumber, weekTitle, optionId, optionTitle, metrics, weekData, selectedOption, oldMetrics) {
  
  // Get API key from environment variable
  const CLAUDE_API_KEY = import.meta.env.VITE_CLAUDE_API_KEY;
  
  // If no API key, return fallback feedback immediately
  if (!CLAUDE_API_KEY) {
    return getFallbackFeedback(weekNumber);
  }
  
  // Format team signals
  const signalsText = weekData.signals
    .map(s => `- ${s.from}: "${s.message}"`)
    .join('\n');
  
  // Format other options (ones NOT chosen)
  const otherOptions = weekData.options
    .filter(opt => opt.id !== optionId)
    .map(opt => `${opt.id}) ${opt.title}\n   → ${opt.consequences.immediate}`)
    .join('\n\n');
  
  // Calculate deltas
  const formatDelta = (value) => {
    if (value > 0) return `+${value}`;
    if (value < 0) return `${value}`;
    return '0';
  };
  
  const deltas = {
    clientTrust: metrics.clientTrust - oldMetrics.clientTrust,
    teamMood: metrics.teamMood - oldMetrics.teamMood,
    techDebt: metrics.techDebt - oldMetrics.techDebt,
    timelineRisk: metrics.timelineRisk - oldMetrics.timelineRisk
  };
  
  const prompt = `You are a seasoned PM reflecting on a real project decision.

WEEK ${weekNumber}/12: "${weekTitle}"

SITUATION:
${weekData.context}

TEAM SIGNALS:
${signalsText}

YOUR DECISION:
Option ${optionId}: "${selectedOption.title}"
→ ${selectedOption.consequences.immediate}

WHAT YOU DIDN'T CHOOSE:
${otherOptions}

IMPACT:
- Client Trust: ${oldMetrics.clientTrust} → ${metrics.clientTrust} (${formatDelta(deltas.clientTrust)})
- Team Mood: ${oldMetrics.teamMood} → ${metrics.teamMood} (${formatDelta(deltas.teamMood)})
- Tech Debt: ${oldMetrics.techDebt} → ${metrics.techDebt} (${formatDelta(deltas.techDebt)})
- Timeline Risk: ${oldMetrics.timelineRisk} → ${metrics.timelineRisk} (${formatDelta(deltas.timelineRisk)})

Provide grounded feedback in 2-3 paragraphs (150-200 words total):

1. What this decision accomplished (why it worked or didn't)
2. What trade-off or hidden cost exists (what you gave up vs other options)
3. One insight an experienced PM would notice at Week ${weekNumber}/12

Rules:
- Reference SPECIFIC details from this week's situation
- Compare to the options you DIDN'T choose
- Tie to metrics changes (explain WHY mood/debt/risk changed)
- NO generic advice ("communication is key")
- Real, grounded, experienced PM voice
- Speak as if you lived through this exact project

Write naturally and honestly.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        temperature: 0.7,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    if (!response.ok) {
      console.error('Claude API error:', response.status);
      return getFallbackFeedback(weekNumber);
    }

    const data = await response.json();
    return data.content[0].text;
    
  } catch (error) {
    console.error('Claude API Error:', error);
    return getFallbackFeedback(weekNumber);
  }
}

// Fallback feedback when API unavailable
function getFallbackFeedback(weekNumber) {
  const fallbacks = [
    `This decision moved the project forward, but like all choices, it came with trade-offs.\n\nThe immediate benefit was clear, but you've created some downstream effects that will compound over the coming weeks. Every "yes" to speed is a "no" to something else — usually stability or team capacity.\n\nAn experienced PM would weigh whether this trade-off aligns with what matters most at Week ${weekNumber} of 12. Sometimes the right decision still hurts.`,
    
    `You made a call under pressure. That's the job.\n\nThe team will feel the impact of this choice differently than the client will. What looks like progress on one front often creates friction on another. The key isn't avoiding trade-offs — it's being honest about which ones you're making.\n\nAt Week ${weekNumber}, you're building momentum. But momentum has mass, and changing direction gets harder the further you go.`,
    
    `In the moment, this probably felt like the only reasonable choice. And maybe it was.\n\nBut reasonable decisions still have consequences. The team's capacity isn't infinite. Tech debt isn't just code — it's all the shortcuts and compromises that seem fine today but compound tomorrow.\n\nYou're managing multiple truths at once: what the client needs, what the team can sustain, what the timeline demands. Week ${weekNumber} is when these truths start to conflict.`
  ];
  
  return fallbacks[weekNumber % fallbacks.length];
}
