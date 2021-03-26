import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, NavMenu, DropDownNav } from "./styles";
import { RootContext } from "../../contexts/root";
import { Link } from "react-router-dom";

export default function NavBarRight() {
    const { userContext } = useContext(RootContext);
    const [ active, setActive ] = useState(false);

    return (
        <ul className="nav navbar-nav navbar-right">
            <NavMenu className="" onMouseLeave={() => setActive(false)}>

                <Button className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    {userContext.user.id && <img src={`/images/admin/users/${userContext.user.id}.jpeg`} alt="..." />}
                    <div>
                        <span>
                            {`${userContext.user.name} ${userContext.user.last_name}`}
                        </span>
                    </div>
                        <FontAwesomeIcon 
                            icon={['fas', `${active ? 'chevron-up' : 'chevron-down'}`]} 
                            className="fa" onClick={() => setActive(!active)}
                        />
                </Button>
                <DropDownNav className="dropdown-menu dropdown-usermenu pull-right" active={ active } >
                    <li>
                        <Link to={`/admin/perfil/${userContext.user.id}`}>> Profile</Link>
                    </li> 
                    <li>
                        <Button>
                            <span className="badge bg-red pull-right">50%</span>
                            <span>Settings</span>
                        </Button>
                    </li>
                    <li>
                        <Link to="">>Help</Link>
                    </li>
                    <li>
                        <Link to="/logout">>
                            <i className="fa fa-sign-out pull-right"></i> Log Out
                        </Link>
                    </li>
                </DropDownNav>
            </NavMenu>

            <li role="presentation" className="dropdown">
                <Button className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon 
                        icon={['fas', 'envelope']} 
                        className="fa" 
                    />
                    <span className="badge bg-green">6</span>
                </Button>
                <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                    <li>
                        <Link to="">>
                            <span className="image"><img src="images/img.jpg" alt="Profile" /></span>
                            <span>
                            <span>John Smith</span>
                            <span className="time">3 mins ago</span>
                            </span>
                            <span className="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                            </span>
                        </Link>
                    </li>
                    <li>
                        <div className="text-center">
                            <Link to="">>
                            <strong>See All Alerts</strong>
                            <i className="fa fa-angle-right"></i>
                            </Link>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    )
}