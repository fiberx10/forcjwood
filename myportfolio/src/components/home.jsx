import React, { useRef, useEffect, useState } from "react"
import "..//styles/home.css"
import profilelogo from "..//media/profile/logo2.jpeg"
import Rellax from "rellax";

const Home = () => {
    const rellaxRef = useRef();

    return (
        <div className="home_page" >
            <div className="home_page_insider">
                <div className="home_page_insider_left" >
                    <div className="home_page_insider_left_insider">
                        <h6>
                           I'm  Mohamed Chouichou
                        </h6>
                        <div className="home_page_insider_left_insider_mov">
                            <h2>
                                Full stack web developer
                            </h2>
                            <h2>
                                UI/UX Designer
                            </h2>

                        </div>



                    </div>
                    <h2 className="home_page_insider_left_insider_motivation">
                         " Hire me and take your business to the next level"
                    </h2>
                </div>
                <div className="home_page_insider_right">
                    <div className="xcard_center_img_tag animated">
                        <img className="xcard_center_img" src={profilelogo}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
const test = () => {
    return (
        <div></div>
    );
}

export default Home;