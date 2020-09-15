import React from "react";
import TabComponents from "./TabComponents";
import TabBar from "./TabBar";

export default function Tabs(props) {
    const {src = [], build_id = ""} = props;
console.log(props)
    return (
        <div className="" role="tabpanel" data-example-id="togglable-tabs">
            <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
                {src.map((i) => {
                    return <TabBar key={i.component} component={i.component} tag={i.tag} active={(
                                            i.active !== "undefined" && 
                                            i.active === true ? 
                                            "active" : "") } 
                            />
                })}
            </ul>
            <div id="myTabContent" className="tab-content" >
                {src.map((i) => TabComponents(i,build_id))}
            </div>
        </div>
    )
}