import React from "react";

import Section from "../shared/section";
import BlogCard from "./blog-card";
import plaxonic from "../../images/blogs/plaxonic.png";
import monotype from "../../images/blogs/Monotpye.jpg";
import ibm from "../../images/blogs/inm.svg";
import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="training"
            title="Training and Certificate"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="May 2024"
                    date="May 2025"
                    image={monotype}
                    title="Monotype."
                    description="Software Developer Trainee"
                    tech="•	Tech Stack- REST API, AWS, Redis, ElasticSearch, Gravitee, Swagger"
                />
                <BlogCard
                    user="Dec 2023"
                    date="Feb 2024"
                    image={plaxonic}
                    title="Plaxonic Technologies"
                    description="FullStack Developer Intern"
                    tech="•	Tech Stack- HTML, CSS, Javascript, React, Nodejs, Express, Redux"
                />
                <BlogCard
                    user="June 2022"
                    date="July 2022"
                    image={ibm}
                    title="IBM | Innovation Camp"
                    description="Project: Potato Disease Classiﬁcation using Deep Learning."
                    tech="•	Tech. Stack: Python, Machine Learning, Deep Learning , Tensorﬂow, Matplotlib, Numpy"

                />
            </div>
        </Section>
    );
};

export default Blogs;
