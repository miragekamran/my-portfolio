import React, { Component } from "react";
import { MenuItems } from "../Menu/MenuItems";
import { Button } from "../Button/Button";
import "./NavBar.css";
import Image from '../Images/portfolio-image.png';

export default class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    Mirage Kamran<img className="img" src={Image} alt='Image'/>
                    
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i
                        className={
                            this.state.clicked ? "fas fa-times" : "fas fa-bars"
                        }
                    ></i>
                </div>
                <ul
                    className={
                        this.state.clicked ? "nav-menu active" : "nav-menu"
                    }
                >
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                {/* <Button>Sign Up</Button> */}
            </nav>
        );
    }
}
