import React, { Component } from "react";
import "./Projects.css";
import ProjectPic from "../Images/secret-fam-recipies.png";

export default class Projects extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="projects">
                <div className="projects-outer-box">
                    <h3>Project Details</h3>
                    <p className="projects-inner-box">
                        Hello, my name is Mirage Kamran. I am graduated from
                        Lambda School. I also earned my Asociates Degree in
                        Computer Science from Yuba College in California. The
                        web applications and programs that I have been using in
                        a day to day life have fascinated me by how much they
                        are making life easier and the curiosity of how they all
                        are being created is what has attracted me to take the
                        new journey, and learn. Now I am ready and excited to
                        utilize the knowledge I have gained to build
                        applications and programs that can bring more value to
                        the world.
                    </p>
                </div>
                <br></br>
                <div className="virtical-line"></div>
                <div>
                    <div className="proj-src-outer-box">
                        <h3>Secret Family Recipe</h3>
                        {/* <div className="proj-src-inner-box"> */}
                        <img
                            className="proj-pic"
                            src={ProjectPic}
                            alt="ProjectPic"
                        />
                        {/* </div> */}
                    </div>
                    <div className="code-btn">
                        <a
                            href="https://github.com/miragekamran/sec-fam-recipe"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="code-btn1">See The Code</button>
                        </a>
                        <a
                            href="https://sec-family-recipes.netlify.app/"
                            target='_blank'
                            rel='noreferrer'
                        ><button className="code-btn2">
                            See The Deployed Site
                        </button></a>
                        
                    </div>
                </div>
            </div>
        );
    }
}
