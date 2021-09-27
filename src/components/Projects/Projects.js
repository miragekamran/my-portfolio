import React, { Component } from "react";
import "./Projects.css";
import ProjectPic from "../Images/secret-fam-recipies.png";

export default class Projects extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="main-container">
                <div className="projects">
                    <div className="projects-outer-box">
                        <h3>Project Details</h3>
                        <p className="projects-inner-box">
                            Anyone can go out and buy a cookbook these days, but
                            I want a place to store all my secret family
                            recipes, handed down from generation to generation.
                            The little cards my grandma wrote the recipes on in
                            her beautiful cursive are getting lost or are hard
                            to read. I need somewhere secure to keep my recipes
                            with me at all times!
                            <br></br>
                            Secret Family Recipes is a full-stack react
                            application that allows users to save and share
                            their most valuable recipes with other users.
                            <br></br>
                            <h4>Languages and Libraries</h4>
                            Javascript | React | Redux | HTML | CSS | Postgres |
                            Express | NodeJS
                            <li>
                                I Worked as a front end user interface developer
                                on a team of 5 full-stack developers, including
                                myself.{" "}
                            </li>
                            <li>
                                I Created and designed forms and react
                                components to allow users to interact with the
                                web application in the span of 4 days.
                            </li>
                            <li>
                                I Collaborated with other front end developers
                                and backend developers on the team, to design
                                the user flows of the application after coming
                                up with different user stories.
                            </li>
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
                                rel="noopener noreferrer"
                            >
                                <button className="code-btn1">
                                    See The Code
                                </button>
                            </a>
                            <a
                                href="https://sec-family-recipes.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="code-btn2">
                                    See The Deployed Site
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
