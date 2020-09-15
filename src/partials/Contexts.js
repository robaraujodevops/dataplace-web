import React from "react"

export const SideBarContext = React.createContext({
    page: "analytics",
    setPage: () => {}
})
export const MainContentContext = React.createContext({})