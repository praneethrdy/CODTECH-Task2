import React from "react";
import "../../App.css";
import "../../App.css";

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="projects-container">
        
        {/* Project 1 */}
        <div className="project-item">
          <div className="project-card" data-aos="flip-right" data-aos-duration="1000">
            <div className="project-image-container">
              <img
                src="/image.png"
                className="project-image"
                alt="Movie Finder"
              />
            </div>
            <div className="project-info">
              <h5 className="project-title">MOVIE FINDER</h5>
              <p className="project-description">This is a project made with complete React js.</p>
              <a href=" " target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                Demo
              </a>
              <a href=" " target="_blank" rel="noopener noreferrer" className="project-link code-link">
                Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-item">
          <div className="project-card" data-aos="flip-right" data-aos-duration="1000">
            <div className="project-image-container">
              <img
                src="https://cdn.pixabay.com/photo/2021/06/27/08/19/stock-market-6368031_640.jpg"
                className="project-image"
                alt="Stock-Price Prediction"
              />
            </div>
            <div className="project-info">
              <h5 className="project-title">STOCK PRICE PREDICTION</h5>
              <p className="project-description">This is a project made with ML</p>
              <a href=" " target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                Demo
              </a>
              <a href=" " target="_blank" rel="noopener noreferrer" className="project-link code-link">
                Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-item">
          <div className="project-card" data-aos="flip-right" data-aos-duration="1000">
            <div className="project-image-container">
              <img
                src="https://i.ytimg.com/vi/fxupEgdVNU4/maxresdefault.jpg"
                className="project-image"
                alt="AGROCULTURE MANAGEMENT SYSTEM"
              />
            </div>
            <div className="project-info">
              <h5 className="project-title">AGROCULTURE MANAGEMENT SYSTEM</h5>
              <p className="project-description">This is a project made with HTML, CSS and PHP.</p>
              <a href="" target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                Demo
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="project-link code-link">
                Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-item">
          <div className="project-card" data-aos="flip-right" data-aos-duration="1000">
            <div className="project-image-container">
              <img
                src="https://www.oobautomation.com/wp-content/uploads/2019/04/oob-automation-Agriculture-automation-1024x642.jpg"
                className="project-image"
                alt="SMART FARMING USING IOT"
              />
            </div>
            <div className="project-info">
              <h5 className="project-title">SMART FARMING USING IOT</h5>
              <p className="project-description">This is a project made with C++ and IOT Technology</p>
              <a href="" target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                Demo
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="project-link code-link">
                Code
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
