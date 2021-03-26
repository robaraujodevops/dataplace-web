import React, { useState, useContext } from "react";
import { parsePageData, filteredMenu } from "../helpers/index";
import Menu from "./Menu";
import TopNav from "./TopNav";
import Main from "./Main";
import { MenuContext } from "../contexts/menu";

export default function Master(props) {

  const { menuContext } = useContext(MenuContext);
  const parseData = parsePageData(props.match, menuContext.dataMenu);  

  return (
      <div className={"container body nav-sm"} >
        <div className="main_container">
          <TopNav />
          <section>
            <Menu menu={menuContext} {...parseData} />
            <Main {...parseData} />
          </section>
        </div>
      </div>
  )
}
