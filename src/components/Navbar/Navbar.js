import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return <>
        <div className="navbar">
            <div className="logo">
                <div className="h1">LOGO</div>
            </div>
            <div className="link">
                <ul>
                    <li>
                        <NavLink to={"/form"}>Form</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/table"}>Table</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/services"}>Services</NavLink>
                    </li>
                </ul>
                <input type="submit" name="" id="submit" />
            </div>

        </div>
    </>
}