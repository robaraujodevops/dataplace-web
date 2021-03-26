import React, { useEffect, useState } from "react";
import { BackGroundOpenMenu, MenuGrid } from "./styles";

import SideBar from "./SideBar/";

export default function Menu(props) {
    const { page, subPage, menu } = props;
    const [ activeMenu, setActiveMenu ] = useState(false)
    
    const toggleActive = () => {
        setActiveMenu(!activeMenu)
    }

    useEffect(() => {
        menu.setMenu(menu.dataMenu.map((i) => {
            return {...i, active: ((page.includes(i.page)) ? true : false)}
        }))
    }, [])

    return (
        <div className="col-md-3 left_col menu_fixed" onMouseEnter={toggleActive} onMouseLeave={toggleActive} >
                <MenuGrid className="left_col scroll-view">
                    <SideBar 
                        page={page}
                        subPage={subPage}
                        menu={menu}
                        activeMenu={activeMenu}
                    />
                    {/* <SideBarFooter /> */}
                </MenuGrid>
                <BackGroundOpenMenu activeMenu={activeMenu}></BackGroundOpenMenu>
        </div>
    )
}