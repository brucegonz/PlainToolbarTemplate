import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton onClick={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/"> The Logo</a></div>
            <div className="spacer"/> 
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Inventory</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav> 
        </header>
);

export default toolbar;