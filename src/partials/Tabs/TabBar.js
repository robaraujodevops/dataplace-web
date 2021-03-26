import React from "react";
import { clearClass } from "../../helpers";
import { Tab } from "./style";

export default function TabBar(props){
    const {component, tag, active} = props
    const tabsHead = document.querySelectorAll("[role='presentation']")
    const tabsContent = document.querySelectorAll("[role='tabpanel']")

    const handleClick = (e) => {
        e.preventDefault()

        clearClass([tabsHead, tabsContent], ["active", "in"])
        e.target.parentElement.classList.add("active");
        tabsContent.forEach((tab) => {
            if (tab.getAttribute("aria-labelledby") === e.target.id)
                tab.classList.add("active", "in")
        })
    }

    return (
        <li role="presentation" 
            className={active}>
            <Tab href="#"
               id={component + "-tab"}
               role="tab"
               data-toggle="tab"
               aria-expanded="true"
               onClick={handleClick}>
                {tag}
            </Tab>
        </li>
    )
}