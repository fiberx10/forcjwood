import React, { useEffect, useState } from "react"

import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import { OverlayTrigger, Tooltip, } from "react-bootstrap"
import { Swiper, SwiperSlide, } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// css files 
import { Carousel, Card } from "react-bootstrap"
import "..//styles/projects.css"
// media files 
// js files 
import $ from "jquery"
import img from "..//media/profile/pj1.PNG"


import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const ProjectsContainer = (props) => {
    const [Love, setLove] = useState(false);
    const setinglove = (e) => {
        e.preventDefault()
        console.log("click")
        if (Love == true) {
            setLove(false)
        } else {
            setLove(true)
        }
    }
    return (
        <div className="projectscontainer">
            <div className="projectscontaine_insider">
                <div className="projectscontainer_left">
                    <img src={img} >
                    </img>
                </div>
                <div className="projectscontainer_right">
                    <h6>
                        web dev
                    </h6>
                    <h1>
                        MY PORTFOLIO
                    </h1>
                    <a>
                        www.mohamed-chouichou.me
                    </a>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at sunt non amet earum a provident, distinctio cupiditate doloribus deleniti nemo excepturi aut, quidem officiis! Incidunt assumenda aliquam natus eligendi!
                    </p>
                    <div className="projectscontainer_right_love" onClick={(e) => { setinglove(e) }}>
                        {

                            Love === true && (
                                <OverlayTrigger
                                    key="top"
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                            <strong style={{color : "black"}}>you like it ? react it</strong>.
                                        </Tooltip>
                                    }
                                >                    
                                <RiHeart3Line style={{ fontSize: 40, fontWeight: 400 }} className="projectscontainer_right_love_icon"  ></RiHeart3Line>

                                </OverlayTrigger>
                            )

                        }
                        {
                            Love === false && (
                                <OverlayTrigger
                                    key="top"
                                    placement="left"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                            <strong style={{color : "red"}}>you like it ? react it</strong>.
                                        </Tooltip>
                                    }
                                >
                                    <RiHeart3Fill style={{ fontSize: 40, fontWeight: 400 }} className="projectscontainer_right_love_icon_after"></RiHeart3Fill>
                                </OverlayTrigger>
                            )
                        }
                    </div>

                </div>
            </div>


        </div>
    );
}
class Porjects extends React.Component {
    constructor() {
        super();
        this.state = true;
    }

    render() {
        return (
            <div id="projects" className="projects_page">
                <div className="projects_page_insider">
                    <h1 className="projects_page_insider_top_title">MY PROJECTS</h1>
                    <Carousel fade style={{ width: "100%", height: "80%" }}>
                        <Carousel.Item>
                            <ProjectsContainer></ProjectsContainer>
                        </Carousel.Item>
                        <Carousel.Item>
                            <ProjectsContainer></ProjectsContainer>
                        </Carousel.Item>
                        <Carousel.Item>
                            <ProjectsContainer></ProjectsContainer>
                        </Carousel.Item>
                        <Carousel.Item>
                            <ProjectsContainer></ProjectsContainer>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}
export default Porjects