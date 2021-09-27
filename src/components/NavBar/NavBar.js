import React, { Component } from "react";
import { MenuItems } from "../Menu/MenuItems";
// import { Button } from "../Button/Button";
import "./NavBar.css";
import MyImage from "../Images/portfolio-aks.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <nav className="NavbarItems">
                <div className="mobile-icon-navbar">
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <div className="navbar-logo">
                            <h1>Mirage Kamran</h1>
                            <img
                                className="my-img"
                                src={MyImage}
                                alt="MyImage"
                            />
                        </div>
                    </Link>

                    <div className="menu-icon" onClick={this.handleClick}>
                        <i
                            className={
                                this.state.clicked
                                    ? "fas fa-times"
                                    : "fas fa-bars fa-2x"
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
                </div>
                {/* <Button>Sign Up</Button> */}
            </nav>
        );
    }
}
