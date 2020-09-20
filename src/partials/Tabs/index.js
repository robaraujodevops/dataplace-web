import React from "react";
import TabComponents from "./TabComponents";
import TabBar from "./TabBar";

export default function Tabs(props) {
    const {src = []} = props;

    return (
        <div className="" role="tabpanel" data-example-id="togglable-tabs">
            <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
                {src.map((dt_comp) => {
                    return <TabBar key={dt_comp.component} component={dt_comp.component} tag={dt_comp.tag} active={(
                                            dt_comp.active !== "undefined" && 
                                            dt_comp.active === true ? 
                                            "active" : "") } 
                            />
                })}
            </ul>
            <div id="myTabContent" className="tab-content" >
                {src.map((dt_comp) => TabComponents(dt_comp))}
            </div>
        </div>
    )
}