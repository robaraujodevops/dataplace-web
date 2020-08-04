import React from "react"

export const SideBarContext = React.createContext({
    page: "analytics",
    setPage: () => {},
    subPage: "",
    setSubPage: () => {}
})
export const MainContentContext = React.createContext({})