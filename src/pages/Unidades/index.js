import React from "react"
import PropTypes from "prop-types"
import { capitalize } from "../../helpers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Tables from "../../partials/Tables"
import { Link } from "react-router-dom";

Unidades.propTypes = {
    data: PropTypes.object.isRequired
}

export default function Unidades({data}) {
    const {page, subpage} = data

    return (
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">
                    <div className="x_title">
                        <h2>{capitalize(page)} <small>{capitalize(subpage)}</small></h2>
                        <ul className="nav navbar-right panel_toolbox">
                            <li>
                                <Link to="" className="collapse-link">
                                    <FontAwesomeIcon 
                                        icon={["fas", "chevron-up"]} 
                                        className="fa" 
                                    />
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link to="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></Link>
                                <ul className="dropdown-menu" role="menu">
                                    <li><Link to="">Settings 1</Link>
                                    </li>
                                    <li><Link to="">Settings 2</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="" className="close-link">
                                    <FontAwesomeIcon 
                                        icon={["fas", "window-close"]} 
                                        className="fa" 
                                    />
                                </Link>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="x_content">
                        <Tables 
                            comp={{
                                "scope": "Unidades",
                                "holder": "Nome do Prédio"
                            }}
                            src="units"
                            colsTh={["ID","Nome do Prédio","Unidade","Compl"]}
                            cols={[
                                { data: "id"}, 
                                { data: "build_name" },
                                { data: "uh" },
                                { data: "comp" }
                            ]}
                            colDefs={[
                                {
                                    "targets": 0,
                                    "data": "id",
                                    "render": function ( data ) {
                                        return `<a href='${data}'><b>${data}</b></Link>`
                                    }
                                },
                                { width: "10%", targets: 0 },
                                { width: "60%", targets: 1 },
                                { width: "15%", targets: 2 },
                                { width: "15%", targets: 3 }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}