import React from "react";

import Section from "../shared/section";
import BlogCard from "./blog-card";
import pw from "../../images/blogs/pw.jpg";
import pentagon from "../../images/blogs/pentagon3.jpg";
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
                    user="Jan 2023 "
                    date="Sept 2023"
                    image={pw}
                    title="PW Skills | Boot Camp Training"
                    description="Full Stach Web Development"
                    tech="•	Tech Stack- JAVA, HTML, CSS, Javascript, React, Nodejs, Express, MongoDb "
                />
                <BlogCard
                    user="Jan 2023 "
                    date="June 2023"
                    image={pentagon}
                    title="Pentagon"
                    description="Full Stach Web Development."
                    tech="•	Tech Stack- JAVA, HTML, CSS, Javascript, React, MySQL, DBMS, OOPS "

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
