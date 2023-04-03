import React from 'react';
import { FaRegSmile } from 'react-icons/fa';
import ".././styles/why.css"
const Why = ({title,desc}) => {
  return (
    <div className="card">
      <div className="card-icon">
        <FaRegSmile />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">
            {desc}
         </p>
        <button className="card-btn">Learn More</button>
      </div>
    </div>
  );
}

export default Why;
