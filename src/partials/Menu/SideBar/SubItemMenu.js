import React, { useState } from "react"
import { Link } from "react-router-dom";
import { SubItemMenuGrid, ItemSub } from "./styles";

export default function SubItemMenu(props) {
    const mainPage = props.page;
    const [items, setItems] = useState(props.data)

    return (
        <SubItemMenuGrid className="nav child_menu" {...props}>
            {items.map(({name,page}) => 
                <ItemSub 
                    key={name}
                    data-page={page}
                    active={(props.subPage.classe == page ? true : false)} >

                    <Link to={
                        {
                            pathname: mainPage + "/" + page + "/"
                        }
                    }>
                        {name}
                    </Link>
                </ItemSub> 
            )}
        </SubItemMenuGrid>
    )
}