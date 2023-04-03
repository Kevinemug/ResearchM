import React from 'react';
import ".././styles/title.css"
function Title({title}) {
  return (
    <div className="title-container">
      <h1 className="title" style={{fontSize:"45px"}} >{title}</h1>
      <div className="animation-container">
        <div className="animation-1"></div>
        <div className="animation-2"></div>
        <div className="animation-3"></div>
      </div>
    </div>
  );
}

export default Title;
