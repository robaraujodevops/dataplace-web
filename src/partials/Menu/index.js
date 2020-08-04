import React from "react";
import { Navbar } from "./styles";

import Profile from "./Profile";
import SideBar from "./SideBar/";
import SideBarFooter from "./SideBarFooter";

export default function Menu(props) {
    return (
        <div className="col-md-3 left_col">
            <div className="left_col scroll-view">
                <Navbar className="navbar nav_title">
                    <a href="index.html" className="site_title">
                        <span>Dataplace Admin!</span>
                    </a>
                </Navbar>
                <div className="clearfix"></div>

                <Profile />
                <SideBar setPage={props.setPage} page={props.page}/>
                <SideBarFooter />
            </div>
        </div>
    )
}