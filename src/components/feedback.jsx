import axios from 'axios';
import { useState } from 'react';
import { AiOutlineUser, AiOutlineComment } from 'react-icons/ai';
import '.././styles/feedback.css';

const Feedback = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'feedback':
        setFeedback(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://health-savvy.onrender.com/api/feedback/', {
        firstName,
        lastName,
        message,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
    }
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
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div className="input-container">
            <AiOutlineUser className="input-icon" />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div className="input-container">
            <AiOutlineComment className="input-icon" />
            <textarea
              name="feedback"
              placeholder="Feedback"
              value={message}
              onChange={handleChange}
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
