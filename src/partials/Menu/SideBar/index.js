import React, { useState, useEffect } from "react"
import { PageMenu, MenuSection, TitleMenu, MenuItens } from "./styles"
import SubItemMenu from "./SubItemMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SideBar(props) {
    const { activeMenu, menu, subPage } = props;

    const handleMenu = (page, sub = undefined, active) => {
        menu.setMenu(menu.dataMenu.map((i) => {
            return {...i, active: ((i.page.includes(page)) ? true : false)}
        }))
    }


    return (
        <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
            <MenuSection activeMenu={activeMenu} >
                <ul className="nav side-menu">
                {menu.dataMenu &&
                    menu.dataMenu.map(({
                        icon,
                        title,
                        sub,
                        page,
                        active}) => {

                        return (
                            <PageMenu key={icon} className="pg-menu" data-page={page} >
                                <Link to={ page }>
                                    <FontAwesomeIcon 
                                        icon={['fas', icon]} 
                                        className="fa" 
                                    />
                                </Link>
                                <MenuItens onClick={() => handleMenu(page, sub, active)} >
                                    <TitleMenu active={active} >
                                        {!sub ? <Link to={page}><h5>{title}</h5></Link> : <h5>{title}</h5>}
                                        {sub && <FontAwesomeIcon 
                                            icon={['fas', active ? 'chevron-up' : 'chevron-down']} 
                                            className="fa"
                                        />
                                        }
                                    </TitleMenu>
                                    {sub && <SubItemMenu data={sub} page={page} active={active} subPage={subPage} activeMenu={activeMenu} />}
                                </MenuItens>
                            </PageMenu>
                        )
                    })
                }
                </ul>
            </MenuSection>
        </div>
    )
}