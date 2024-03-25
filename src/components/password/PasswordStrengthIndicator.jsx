import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';

function PasswordStrengthIndicator({ password }) {
  const evaluation = zxcvbn(password);
  const score = evaluation.score;
  const crackTimeSeconds = evaluation.crack_times_seconds.offline_slow_hashing_1e4_per_second;

  // Function to set background color based on password strength
  const getBackgroundColor = () => {
    switch (score) {
      case 0:
        return '#FF3C38'; // Very Weak
      case 1:
        return '#FF6B38'; // Weak
      case 2:
        return '#F7B52B'; // Medium
      case 3:
        return '#90EE90'; // Strong
      case 4:
        return '#00FF7F'; // Very Strong
      default:
        return '#FFFFFF'; // Default
    }
  };

  const getBarWidth = () => {
    return `${(score + 1) * 20}%`; // Each score corresponds to approximately 20% width
  };

  return (
    <div style={{ marginTop: '10px', marginBottom: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <div>Password Strength: <strong>{evaluation.feedback.suggestions[0]}</strong></div>
        <div>Score: {score}</div>
        <div>Estimated time to crack: {crackTimeSeconds.toFixed(2)} seconds</div>
      </div>
      <div
        style={{
          width: '100%',
          height: '20px',
          backgroundColor: getBackgroundColor(),
          borderRadius: '4px',
          transition: 'width 0.5s ease'
        }}
      >
        <div
          style={{
            width: getBarWidth(),
            height: '100%',
            backgroundColor: '#FFFFFF',
            borderRadius: '4px'
          }}
        ></div>
      </div>
    </div>
  );
}

export default PasswordStrengthIndicator