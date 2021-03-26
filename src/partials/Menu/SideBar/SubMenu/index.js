import React from "react"
import { SubMenuWrapper } from "./styles"

export default function SubMenu(props) {
    const { active, menuItens } = props;

    return (
        <SubMenuWrapper active={active}>
            <ul>
                {menuItens.map((item) => <li>{item.title}</li>)}
            </ul>
        </SubMenuWrapper>
    )
}