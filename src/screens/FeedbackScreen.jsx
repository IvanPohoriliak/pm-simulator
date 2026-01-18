import { useState, useEffect } from 'react'
import { generateAIFeedback } from '../utils/claudeAPI'

function FeedbackScreen({ weekNumber, weekTitle, selectedOption, metrics, onContinue, weekData, oldMetrics }) {
  const [feedback, setFeedback] = useState('')
  const [loading, setLoading] = useState(true)
  const [isStreaming, setIsStreaming] = useState(false) // ✅ ADDED

  useEffect(() => {
    async function loadFeedback() {
      setLoading(true)
      setIsStreaming(true) // ✅ ADDED
      
      // ✅ STREAMING with callback
      await generateAIFeedback(
        weekNumber,
        weekTitle,
        selectedOption.id,
        selectedOption.title,
        metrics,
        weekData,
        selectedOption,
        oldMetrics,
        (chunk) => {
          setFeedback(chunk)
          setLoading(false)
        }
      )
      
      setIsStreaming(false) // ✅ ADDED
    }
    
    loadFeedback()
  }, [weekNumber, weekTitle, selectedOption, metrics, weekData, oldMetrics])

  const isLastWeek = weekNumber >= 12

  return (
    <div className="feedback-screen">
      <div className="feedback-content">
        <h3>AI Feedback</h3>
        
        {loading && feedback === '' ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Generating feedback...</p>
            
            <button 
              className="btn-secondary" 
              onClick={onContinue}
              style={{ marginTop: '20px' }}
            >
              Skip feedback →
            </button>
          </div>
        ) : (
          <>
            <p className="feedback-text">{feedback}</p>
            
            {/* ✅ ADDED typing indicator */}
            {isStreaming && (
              <span className="typing-indicator">▋</span>
            )}
          </>
        )}
      </div>

      <div className="btn-center">
        <button 
          className="btn-primary" 
          onClick={onContinue}
          disabled={loading && feedback === ''}
        >
          {isLastWeek ? 'See Final Review' : `Continue to Week ${weekNumber + 1}`}
        </button>
      </div>
    </div>
  )
}

export default FeedbackScreen
