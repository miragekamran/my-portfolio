import React, { Component } from 'react';
import MyImage from '../Images/portfolio-aks.png';
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="bio-outer-box">
                    <p className="bio-inner-box">
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
                    <br></br>
                    <h3>Technical Skills</h3>
                    <div className="Tech-skills-section-skills">
                        <p className="Tech-skill">Javascript</p>
                        <p className="Tech-skill">HTML</p>
                        <p className="Tech-skill">CSS</p>
                        <p className="Tech-skill">LESS</p>
                        <p className="Tech-skill">Responsive Design</p>
                        <p className="Tech-skill">Git</p>
                        <p className="Tech-skill">React.js</p>
                        <p className="Tech-skill">Redux</p>
                        <p className="Tech-skill">Automated Unit Testing</p>
                        <p className="Tech-skill">Integration Testing</p>
                        <p className="Tech-skill">Debugging</p>
                        <p className="Tech-skill"> Deployment</p>
                        <p className="Tech-skill">Node.js</p>
                        <p className="Tech-skill">RESTful APIs</p>
                        <p className="Tech-skill">End-To-End Testing</p>
                        <p className="Tech-skill">Express.js</p>
                        <p className="Tech-skill">Relational Databases</p>
                        <p className="Tech-skill">PostgreSQL</p>
                        <p className="Tech-skill">SQLite Testing</p>
                        <p className="Tech-skill">Authentication</p>
                        <p className="Tech-skill">Python</p>
                        <p className="Tech-skill"> Data Structures</p>
                        <p className="Tech-skill">Algorithms</p>
                        <p className="Tech-skill">Computer Architecture</p>
                        <p className="Tech-skill"> Big-O Notation</p>
                        <p className="Tech-skill">Graphs</p>
                    </div>
                </div>
                <div className="virtical-line"></div>
                <div>
                    <img className="big-img" src={MyImage} alt="MyImage" />
                    <div
                        className="Platforms"
                        style={{ textDecoration: "none" }}
                    >
                        <a
                            href="https://twitter.com/MirageKamran1"
                            target="_blank"
                            rel="noreferrer"
                            class="fab fa-twitter fa-border fa-2x"
                        ></a>
                        <a
                            href="https://www.linkedin.com/in/mirage-kamran/"
                            target="_blank"
                            rel="noreferrer"
                            class="fab fa-linkedin fa-border fa-2x"
                        ></a>
                        <a
                            href="https://github.com/miragekamran"
                            target="_blank"
                            rel="noreferrer"
                            class="fab fa-github fa-border fa-2x"
                        ></a>
                    </div>
                </div>
            </div>
        );
    }
}
