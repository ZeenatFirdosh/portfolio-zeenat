import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Ecommerce website",
        tags: ["next"],
        media: {
            thumbnail: require("../../images/portfolio/zs-shop.png"),
        },
        link :{
            github: "https://github.com/ZeenatFirdosh/E-commerce",
            demo: "https://zs-shop.netlify.app/",
        },
    },
    {
        id: 2,
        name: "YouTube Clone website",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/youtube.png"),
        },
        link :{
            github: "https://github.com/ZeenatFirdosh/YouTube-clone",
            demo: "https://youtube-main.netlify.app/",
        },
    },
    {
        id: 3,
        name: "NewsApp: News Landing Page",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/newsapp.jpeg"),
        },
        link :{
            github: "https://github.com/ZeenatFirdosh/newsapp",
            demo: "https://github.com/ZeenatFirdosh/newsapp",
        },
    },
    {
        id: 4,
        name: "Tic Tac Toe",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/tic-tac-toe.png"),
        },
        link :{
            github: "https://github.com/ZeenatFirdosh/Tic-Tac-Toe",
            demo: "https://tic-tac-toe-main.netlify.app/",
        },
    },
    // {
    //     id: 5,
    //     name: "Limitless",
    //     tags: ["web-app", "web-page"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/thumb-6.jpg"),
    //     },
    // },
    // {
    //     id: 6,
    //     name: "Dashboard",
    //     tags: ["product", "web-app", "mobile-app"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/thumb-4.jpg"),
    //     },
    // },
    // {
    //     id: 7,
    //     name: "Digital Creative Agency",
    //     tags: ["web-app"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/thumb-3.jpg"),
    //     },
    // },
    // {
    //     id: 8,
    //     name: "Virtual Reality Experience",
    //     tags: ["web-app", "mobile-app", "web-page"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/thumb-5.jpg"),
    //     },
    // },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
