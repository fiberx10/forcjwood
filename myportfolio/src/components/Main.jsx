
import react, { useEffect, useState } from "react"
import { Swiper, SwiperSlide, } from "swiper/react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Autoplay } from "swiper/core";
import SwiperCore, {
    Navigation
} from 'swiper/core';
import $ from "jquery"
// Import Swiper styles
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"


import "..//styles/main.css"
import {OverlayTrigger , Tooltip , } from "react-bootstrap"

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
const Main = () => {
    return (
        <div className="main_page">
            <div className="main_page_bottom">
                <div className="main_page_bottom_next">
                    <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                <strong>Projects</strong>.
                            </Tooltip>
                        }
                    >
                        <a href="#projects">
                                                <KeyboardArrowDownIcon style={{ fontSize: 50, color: "white" }} ></KeyboardArrowDownIcon>

                        </a>
                    </OverlayTrigger>
                </div>
            </div>
            <div className="main_page_top">
                <div className="main_page_top_next">
                    <a target="_blank" href="https://www.linkedin.com/in/mohamed-chouichou-222797201/">
                        <LinkedInIcon style={{ fontSize: 30, color: "white" }} ></LinkedInIcon>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/mohamed-chouichou-222797201/">
                        <GitHubIcon style={{ fontSize: 30, color: "white" }} ></GitHubIcon>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/mohamed-chouichou-222797201/">
                        <TwitterIcon style={{ fontSize: 30, color: "white" }} ></TwitterIcon>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Main;