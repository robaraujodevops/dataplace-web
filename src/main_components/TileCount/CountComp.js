import React from "react";

export default function CountComp(props) {

    return (
        <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
            <span className="count_top">
                <i className="fa fa-user"></i>
                    {props.title}
            </span>
            <div className="count">{props.count}</div>
            <span className="count_bottom"><i className="green">4% </i> From last Week</span>
        </div>
    )
}