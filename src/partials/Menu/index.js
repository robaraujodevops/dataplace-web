import React from "react";
import { Navbar } from "./styles";

import Profile from "./Profile";
import SideBar from "./SideBar/";
import SideBarFooter from "./SideBarFooter";

export default function Menu(props) {
    const { page, subPage } = props;
    
    return (
        <div className="col-md-3 left_col menu_fixed">
            <div className="left_col scroll-view">
                <Navbar className="navbar nav_title">
                    <a href="index.html" className="site_title">
                        <span>Dataplace Admin!</span>
                    </a>
                </Navbar>
                <div className="clearfix"></div>

                <Profile />
                <SideBar page={page} subPage={subPage} />
                <SideBarFooter />
            </div>
        </div>
    )
}