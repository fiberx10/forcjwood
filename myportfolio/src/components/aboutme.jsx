
import "..//styles/aboutme.css"

import profilelogo from "..//media/profile/logo2.jpeg"
import React, { useRef, useEffect } from "react";
import Rellax from "rellax";

const AboutMe = () => {
    const rellaxRef = useRef();
    useEffect(() => {
        new Rellax(rellaxRef.current, { 
          speed: 1.3,
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false
        });
      }, []);
    return (
        <div className="aboutme_page">
            <h1>
                About Me
            </h1>
            <div className="aboutme_page_layout">
                <div className="aboutme_page_layout_left">
                </div>
                <div className="aboutme_page_layout_right" ref={rellaxRef}>
                    <h6>Hello sir !</h6>
                    <h4>
                    my nickname is Fiberx01.
I'm passionate about delivering something that works and you would be proud to show off. I mainly build websites on reactjs and nodejs. I'm creative and usually think from the point of view of the website owner.
I can't wait to see your reaction to what I'm going to show you.
                    </h4>

                </div>
            </div>
        </div>
    );
}



export default AboutMe;