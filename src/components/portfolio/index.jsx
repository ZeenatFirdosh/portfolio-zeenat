import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    // {
    //     id: 1,
    //     name: "Food Delivery App",
    //     tags: ["next"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/food.png"),
    //     },
    //     link :{
    //         github: "https://github.com/ZeenatFirdosh/food-ordering-NEXT",
    //         demo: "https://food-ordering-next.vercel.app/",
    //     },
    // },
    // {
    //     id: 2,
    //     name: "Ecommerce Clothes Store",
    //     tags: ["next"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/store.png"),
    //     },
    //     link :{
    //         github: "https://github.com/ZeenatFirdosh/Ecommerce-Next-cloth-Store",
    //         demo: "https://ecommerce-next-store.vercel.app/",
    //     },
    // },
    // {
    //     id: 3,
    //     name: "Dashboard (Clothes Store)",
    //     tags: ["next"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/admin.png"),
    //     },
    //     link :{
    //         github: "https://github.com/ZeenatFirdosh/clothstore-Next-admin",
    //         demo: "https://ecommerce-next-admin.vercel.app/",
    //     },
    // },
    {
        id: 3,
        name: "MERN FullStack Ecommerce",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/shop.png"),
        },
        link :{
            github: "https://github.com/ZeenatFirdosh/Full-Stack-E-Commerce-MERN-APP",
            demo: "https://full-stack-e-commerce-mern-app-omega.vercel.app/",
        },
    },
    {
        id: 4,
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
        id: 5,
        name: "Home Rental Application",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/dream.png"),
        },
        link :{
            github: "https://github.com/ZeenatFirdosh/Dream-House-Frontend",
            demo: "https://my-dreamhouse.netlify.app/",
        },
    },
    {
        id: 6,
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
        id: 7,
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
        id: 8,
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
    {
        id: 9,
        name: "Movie Search App",
        tags: ["javascript"],
        media: {
            thumbnail: require("../../images/portfolio/movie.png"),
        },
        link :{
            github: "https://github.com/ZeenatFirdosh/moviesearchapp",
            demo: "https://moviesearchapp-two.vercel.app/",
        },
    },
    {
        id: 10,
        name: "Note App",
        tags: ["javascript"],
        media: {
            thumbnail: require("../../images/portfolio/note.png"),
        },
        link :{
            github: "https://github.com/ZeenatFirdosh/note-app",
            demo: "https://notes-javascript-app.netlify.app/",
        },
    },
    {
        id: 11,
        name: "Nike",
        tags: ["react"],
        media: {
            thumbnail: require("../../images/portfolio/nike.png"),
        },
        link :{
            github: "https://github.com/ZeenatFirdosh/Nike",
            demo: "https://nike-steel-nine.vercel.app/",
        },
    },
    {
        id: 12,
        name: "Wheather App",
        tags: ["javascript"],
        media: {
            thumbnail: require("../../images/portfolio/wheather.jpeg"),
        },
        link :{
            github: "https://github.com/ZeenatFirdosh/wheather-app",
            demo: "https://wheather-app-javascript.netlify.app/",
        },
    },
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
