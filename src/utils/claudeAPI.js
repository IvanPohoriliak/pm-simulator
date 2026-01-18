// Claude API - ENGLISH with STREAMING

export async function generateAIFeedback(
  weekNumber,
  weekTitle,
  optionId,
  optionTitle,
  newMetrics,
  weekData,
  selectedOption,
  oldMetrics,
  onChunk // ✅ STREAMING callback
) {
  const signalsText = weekData.signals
    .map(s => `- ${s.from}: "${s.message}"`)
    .join('\n');
  
  const otherOptions = weekData.options
    .filter(opt => opt.id !== optionId)
    .map(opt => `${opt.id}) ${opt.title}\n   → ${opt.consequences.immediate}`)
    .join('\n\n');
  
  const formatDelta = (value) => {
    if (value > 0) return `+${value}`;
    if (value < 0) return `${value}`;
    return '0';
  };
  
  const deltas = {
    clientTrust: newMetrics.clientTrust - oldMetrics.clientTrust,
    teamMood: newMetrics.teamMood - oldMetrics.teamMood,
    techDebt: newMetrics.techDebt - oldMetrics.techDebt,
    timelineRisk: newMetrics.timelineRisk - oldMetrics.timelineRisk
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
- Client Trust: ${oldMetrics.clientTrust} → ${newMetrics.clientTrust} (${formatDelta(deltas.clientTrust)})
- Team Mood: ${oldMetrics.teamMood} → ${newMetrics.teamMood} (${formatDelta(deltas.teamMood)})
- Tech Debt: ${oldMetrics.techDebt} → ${newMetrics.techDebt} (${formatDelta(deltas.techDebt)})
- Timeline Risk: ${oldMetrics.timelineRisk} → ${newMetrics.timelineRisk} (${formatDelta(deltas.timelineRisk)})

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
    const response = await fetch('/api/claude', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1000,
        stream: true // ✅ STREAMING
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullText = '';

    while (true) {
      const { done, value } = await reader.read();
      
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          
          if (data === '[DONE]') continue;

          try {
            const parsed = JSON.parse(data);
            
            if (parsed.type === 'content_block_delta') {
              const text = parsed.delta?.text || '';
              fullText += text;
              
              if (onChunk) {
                onChunk(fullText);
              }
            }
          } catch (e) {
            // Skip invalid JSON
          }
        }
      }
    }

    return fullText || 'Feedback temporarily unavailable';
    
  } catch (error) {
    console.error('AI Feedback error:', error);
    return 'Error generating feedback. Please try again.';
  }
}

export async function generateFinalReview(
  decisionHistory,
  finalMetrics,
  scenarioData,
  onChunk // ✅ STREAMING callback
) {
  const decisions = decisionHistory
    .map((d) => `Week ${d.week}: ${d.title}`)
    .join('\n');

  const prompt = `You are writing the final retrospective for a 12-week PM simulation project.

THE PROJECT:
${scenarioData.projectBrief.context}

THE 12 DECISIONS MADE:
${decisions}

FINAL METRICS:
- Client Trust: ${finalMetrics.clientTrust}/100
- Team Mood: ${finalMetrics.teamMood}/100
- Tech Debt: ${finalMetrics.techDebt}/100 (higher = worse)
- Timeline Risk: ${finalMetrics.timelineRisk}/100 (higher = worse)

Write a powerful, honest final reflection (300-400 words) that:

1. **What Happened** (100 words): Describe the project outcome based on final metrics. Did they succeed? At what cost? Be specific about the demo, funding, and what was real vs what was shown.

2. **The Pattern** (150 words): Analyze the decision pattern across 12 weeks. What trade-offs were consistently made? How did early decisions compound into later problems? Reference specific weeks where trajectory changed.

3. **The Reality** (100 words): The truth that doesn't go in retrospectives. What did this cost the team? What expectations are now set for the next phase? What can't be given to everyone?

Rules:
- Write like someone who lived through this exact project
- Reference specific metrics to tell the story (e.g., "65 trust but 45 mood tells you...")
- NO generic PM advice
- NO teaching tone
- Be honest, sometimes brutal
- Make it personal and real
- Use short paragraphs and punchy sentences
- End with the uncomfortable truth

Do NOT use headers or markdown. Write in flowing prose, separated by blank lines between sections.`;

  try {
    const response = await fetch('/api/claude', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1500,
        stream: true // ✅ STREAMING
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullText = '';

    while (true) {
      const { done, value } = await reader.read();
      
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          
          if (data === '[DONE]') continue;

          try {
            const parsed = JSON.parse(data);
            
            if (parsed.type === 'content_block_delta') {
              const text = parsed.delta?.text || '';
              fullText += text;
              
              if (onChunk) {
                onChunk(fullText);
              }
            }
          } catch (e) {
            // Skip invalid JSON
          }
        }
      }
    }

    return fullText || 'Final review temporarily unavailable';
    
  } catch (error) {
    console.error('Final Review error:', error);
    return 'Error generating final review.';
  }
}
