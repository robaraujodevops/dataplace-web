import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBarRight from "./NavBarRight";
import { Button } from "./styles"
export default function TopNav(props) {
    return (
        <div className="top_nav">
            <div className="nav_menu">
                <nav>
                    <div className="nav toggle">
                        <Button id="menu_toggle" onClick={props.handleClick}>
                            <FontAwesomeIcon icon={['fas', 'bars']} className="fa" />
                        </Button>
                    </div>
                    <NavBarRight />
                </nav>
            </div>
        </div>
    )
}