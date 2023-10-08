import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { AiOutlineCloudDownload } from "react-icons/ai";

import { init } from "ityped";
import { useEffect, useRef } from "react";
import girl from "../../../images/zeenat.png";
import hand from "../../../images/hand.png";
import Resume from "../../../download/Zeenat Resume.pdf";

import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: [
                "Full Stack Developer",
                "Frontend Developer",
                "Software Developer",
                "Web Developer",
            ],
        });
    }, []);

    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Zeenat Firdosh Quadri</span>
                    </h1>
                    <p className="title">
                        <h3>
                             <span ref={textRef}></span>
                        </h3>
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                    {/* <CallToAction
                        text="Contact me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    /> */}
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="Hello I am Zeenat Firdosh Quadri"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Web Developer</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            {/* <span>4k+</span> */}
                            Full Stack Developer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
