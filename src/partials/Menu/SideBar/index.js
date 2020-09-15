import React, { useState, useEffect, useContext } from "react"
import { dataMenu } from "../data-menu"
import { PageMenu } from "./styles"
import SubItemMenu from "./SubItemMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {CSSTransition} from 'react-transition-group';
import { Link } from "react-router-dom";
import { SideBarContext } from "../../Contexts";

export default function SideBar(props) {
    const [items, setItems] = useState(dataMenu);
    const { page, subpage } = props;
    
    const menuRunner = (page) => {
        
        items.map((item) => {
            item.active = item.page.includes(page, 0) ? true : false;

            if(item.sub) item.sub.map((sub) => sub.active = false )
            
        })

        setItems([...items])

        return;
    }
    
    const toggle = (ev) => {
        ev.preventDefault()
        let page = ev.currentTarget.dataset.page
        menuRunner(page)
    }

    useEffect(() => {
        menuRunner(page)
    }, [])

    return (
        <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
            <div className="menu_section">
                <h3>General</h3>
                <ul className="nav side-menu">
                {items &&
                    items.map(({
                        icon,
                        title,
                        sub,
                        active,
                        page}) => {
                        
                        return (
                            <PageMenu key={title} className={active ? "active" : ""} data-page={page} onClick={toggle}>
                                <Link to={ page }>
                                    <FontAwesomeIcon 
                                        icon={['fas', icon]} 
                                        className="fa" 
                                    />
                                    {title}
                                    {sub && <FontAwesomeIcon 
                                        icon={['fas', 'chevron-down']} 
                                        className="fa"
                                    />
                                    }
                                </Link>
                                {sub && 
                                <CSSTransition
                                    in={active}
                                    timeout={1}
                                    classNames="nav child_menu active"
                                >
                                    <SubItemMenu data={sub} page={page}/>
                                </CSSTransition>
                                }
                            </PageMenu>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}