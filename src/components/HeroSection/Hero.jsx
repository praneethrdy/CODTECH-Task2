import React, { useEffect, useRef } from "react";
import Resume from "../../Resume/Resume.pdf";
import Typed from "typed.js";
import SideImage from "../../assets/Images/hero/myImage.jpg"
import "../../App.css"

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Praneeth Reddy Devarannagari",
        "I'm a Java Developer",
        
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={Resume}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={SideImage} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
