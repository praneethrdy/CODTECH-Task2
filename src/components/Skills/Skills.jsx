import React from "react";
import css from "../../assets/Images/skills/css.png";
import tailwind from "../../assets/Images/skills/tailwind.png";
import firebase from "../../assets/Images/skills/firebase.png";
import java from "../../assets/Images/skills/java.png";
import html from "../../assets/Images/skills/html.png";
import javascript from "../../assets/Images/skills/javascript.png";
import node from "../../assets/Images/skills/node.png";
import react from "../../assets/Images/skills/react.png";
import c from "../../assets/Images/skills/c.jpg"; 
import "../../App.css";

const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <h1>SKILLS</h1>
      <div className="items">
        <div className="item" data-aos="flip-left" data-aos-duration="1000">
          <img src={html} alt="HTML" />
          <h3>HTML</h3>
        </div>
        <div className="item" data-aos="flip-left" data-aos-duration="1000">
          <img src={css} alt="CSS" />
          <h3>CSS</h3>
        </div>
        <div className="item" data-aos="flip-left" data-aos-duration="1000">
          <img src={tailwind} alt="Figma" />
          <h3>Tailwind</h3>
        </div>
        <div className="item" data-aos="flip-left" data-aos-duration="1000">
          <img src={javascript} alt="JavaScript" />
          <h3 >JavaScript</h3>
        </div>
        <div className="item" data-aos="flip-left" data-aos-duration="1000">
          <img src={react} alt="React" />
          <h3>React</h3>
        </div>
        <div className="item" data-aos="flip-left" data-aos-duration="1000">
          <img src={node} alt="Node" />
          <h3>Node</h3>
        </div>
        <div className="item" data-aos="flip-left" data-aos-duration="1000">
          <img src={firebase} alt="Firebase" />
          <h3>Firebase</h3>
        </div>
        <div className="item" data-aos="flip-left" data-aos-duration="1000">
          <img src={java} alt="GraphQL" />
          <h3>Java</h3>
        </div>
        <div className="item" data-aos="flip-left" data-aos-duration="1000">
          <img src={c} alt="MongoDB" />
          <h3>C</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
