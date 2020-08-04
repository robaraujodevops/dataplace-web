import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import TopNav from "./TopNav";
import { SideBarContext } from "./Contexts";
import { MainContentContext } from "./Contexts";
import api from "../services/api";
import Main from "./Main";

export default function Master(props) {
  const [user, setUser] = useState({});
  const [menuColapse, setMenuColapse] = useState(false);
  
  const mainData = {
    page: props.page,
    subpage: props.location.subpage  || undefined
  };
  
  const handleClick = () => {
    setMenuColapse(!menuColapse);
  };

  useEffect(() => {
    api.get("/sessions").then((resp) => {
      setUser(resp.data)
    })
  }, []);

  return (
      <div className={"container body " + (menuColapse ? "nav-sm" : "nav-md") } >
      <MainContentContext.Provider value={{user}}>
        <div className="main_container">
          <Menu colapse={menuColapse} page={props.match.url} />
          <TopNav handleClick={handleClick} />
          <Main data={mainData} params={props.match.params}/>
        </div>
      </MainContentContext.Provider>
      </div>
  )
}
