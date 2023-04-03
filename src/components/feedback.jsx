import React, { useState } from 'react';
import {AiOutlineUser, AiOutlineComment } from 'react-icons/ai';
import ".././styles/feedback.css"
const Feedback = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit feedback data to backend API or store it in state management tool like Redux
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setFeedback('');
    setIsSubmitted(false);
  };

  return (
    <div className="feedback-container">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="input-container">
            <AiOutlineUser className="input-icon" />
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-container">
            <AiOutlineUser  className="input-icon" />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-container">
            <AiOutlineComment  className="input-icon" />
            <textarea
              placeholder="Feedback"
              value={feedback}
              onChange={(event) => setFeedback(event.target.value)}
              className="input-field feedback-field"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      ) : (
        <div className="submitted-container">
          <h3>Thank you for your feedback!</h3>
          <button onClick={handleReset} className="reset-button">
            Submit another feedback
          </button>
        </div>
      )}
    </div>
  );
};

export default Feedback;
