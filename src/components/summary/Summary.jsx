import React, { useState } from 'react';
import "../../App.css";

function Summary() {
 
  const [isFlipped, setIsFlipped] = useState(false);

  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side - Profile Summary */}
        <div className="card-front">
          <h1>Profile Summary</h1>
          <p>A detail-oriented and goal-driven software developer with proficiency in Java, Web Development, and Android Development, alongside expertise in React.js, Node.js, MongoDB, and RESTful APIs. Developed scalable applications such as Agro Culture System Development, Smart Farming Using IoT, and Movie Finder, integrating real-time data and responsive design. Strong in Data Structures and Algorithms (DSA), problem-solving, and debugging, with hands-on experience in tools like Eclipse IDE, IntelliJ IDEA, and PostgreSQL.</p>
          {/* Button inside the front side */}
          <button className='flip-button' onClick={handleFlip}>
            Show Future Goals
          </button>
        </div>

        {/* Back Side - Future Goals */}
        <div className="card-back">
          <h1>Future Goals</h1>
          <p>My primary focus is to advance my expertise in Java Development by mastering frameworks like Spring Boot and Hibernate to build scalable and efficient applications. I aim to strengthen my skills in backend development, RESTful APIs, and system design while continuously improving my knowledge of DSA.

In the long term, I aspire to take on leadership roles, mentor others, and work on impactful projects that drive innovation and enhance user experiences.

</p>
          
          {/* Button inside the back side */}
          <button className='flip-button' onClick={handleFlip}>
            Show Profile Summary
          </button>
        </div>
      </div>
    </>
  );
}

export default Summary;
