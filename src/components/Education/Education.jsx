import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "../../App.css";

const educationData = [
  {
    id: 'mca',
    title: 'MCA (Master of Computer Applications)',
    year: '2023-25',
    institution: 'CMR Institute of Technology',
    cgpa: '9.12 CGPA',
    link: '',
  },
  {
    id: 'bca',
    title: 'BCA (Bachelor of Computer Applications)',
    year: '2020-23',
    institution: 'CMR University',
    cgpa: '8.32 CGPA',
    link: '',
  },
  {
    id: 'twelfth',
    title: 'Board Of Intermediate Education',
    year: '2019-20',
    institution: 'MasterMinds Arts Junior College',
    cgpa: '8.75 CGPA',
    link: '',
  },
  {
    id: 'tenth',
    title: 'Board Of Secondary Education',
    year: '2018-19',
    institution: 'SVL MEMORIAL EM HIGH SCHOOL',
    cgpa: '8.8 CGPA',
    link: '',
  }
];

function Education() {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <div id="education">
      <h1>Education</h1>
      <div className="educationWrapper">
        {educationData.map((edu) => (
          <div key={edu.id} className={`flip-card ${flippedCard === edu.id ? 'flipped' : ''}`}>
            {/* Front side */}
            <div className="flip-card-front">
              <h3>{edu.title}</h3>
              <h4>- <span>({edu.year})</span></h4>
              <button
                className={`button ${flippedCard === edu.id ? 'flipped' : ''}`} 
                onClick={() => handleFlip(edu.id)}
              >
                <span>{flippedCard === edu.id ? 'Hide Details' : 'Show Details'}</span>
              </button>
            </div>
            {/* Back side */}
            <div className="flip-card-back">
              <h3>{edu.institution}</h3>
              <h5>{edu.cgpa}</h5>
              <a href={edu.link} target="_blank" rel="noopener noreferrer">
                <span className="arrow arrow-right"><FaArrowRight /></span>
                Marksheet
                <span className="arrow arrow-left"><FaArrowLeft /></span>
              </a>

              <button
                className={`button ${flippedCard === edu.id ? 'flipped' : ''}`} 
                onClick={() => handleFlip(edu.id)}
              >
                <span>{flippedCard === edu.id ? 'Hide Details' : 'Show Details'}</span>
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
