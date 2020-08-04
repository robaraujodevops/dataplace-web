import React, { useState } from "react"
import { Link } from "react-router-dom";

export default function SubItemMenu(props) {

    const [items, setItems] = useState(props.data)

    const toggle = (ev) => {
        ev.preventDefault()
        ev.stopPropagation()
        let page = ev.currentTarget.dataset.page
        
        items.map((item) => 
            item.active = item.page === page ? true : false
        )

        setItems([...items])
    }

    return (
        <ul className="nav child_menu">
            {items.map(({name,page,active}) => 
                <li 
                    key={name}
                    className={active ? "active" : ""}
                    onClick={toggle}
                    data-page={page}>
                    
                    <Link to={
                        {
                            pathname: props.page,
                            subpage: page
                        }
                    }>
                        {name}
                    </Link>
                </li> 
            )}
        </ul>
    )
}