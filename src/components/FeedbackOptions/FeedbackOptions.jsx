import React from 'react';
import styles from './FeedBackOption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.feedbackContainer}>
      {options.map(option => (
        <button
          key={option}
          className={styles.feedbackButton}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
