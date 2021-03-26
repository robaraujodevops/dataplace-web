import React, { useEffect, useState } from 'react';
import { Menu } from "./data-menu"


export const MenuContext = React.createContext();

export default ({ children }) => {
  const [ dataMenu, setMenu ] = useState(Menu)
  const menuContext = { dataMenu, setMenu }
  
  return (
    <MenuContext.Provider value={{ menuContext }} >
        { children }
    </MenuContext.Provider>
  )

}