import React, { useState } from "react"
import PropTypes from "prop-types"
import { capitalize } from "../../helpers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Tables from "../../partials/Tables"
import { Link, useParams } from "react-router-dom";

Predios.propTypes = {
    page: PropTypes.string.isRequired,
    subpage: PropTypes.string.isRequired
}
export default function Predios({page, subpage}) {
    const param = useParams().classe
    const [classe, setClasse] = useState(param);
    
    if (classe !== param) setClasse(param)

    return (
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">
                    <div className="x_title">
                        <h2>{capitalize(page)} <small>{capitalize(subpage)}</small></h2>
                        <ul className="nav navbar-right panel_toolbox">
                            <li>
                                <Link className="collapse-link">
                                    <FontAwesomeIcon 
                                        icon={["fas", "chevron-up"]} 
                                        className="fa" 
                                    />
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></Link>
                                <ul className="dropdown-menu" role="menu">
                                    <li><Link>Settings 1</Link>
                                    </li>
                                    <li><Link>Settings 2</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link className="close-link">
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
                                "scope": "Prédios",
                                "holder": "Id, Nome, Bairro, Adm., Const."
                            }}
                            src={"builds" + (classe ? `?classe=${classe}` : "")}
                            colsTh={["ID","Nome","Bairro","Administradora","Construtora","Data de Construção"]}
                            cols={[
                                { data: "id" },
                                { data: "build_name" },
                                { data: "district_name" },
                                { data: "administrator_name" },
                                { data: "developer_name" },
                                { data: "dt_constr" }
                            ]}
                            colDefs={[
                                {
                                    "targets": 0,
                                    "data": "id",
                                    "render": function ( data ) {
                                        return `<a href='/admin/predio/${data}'><b>${data}</b></Link>`
                                    }
                                },
                                { width: 500, targets: 1 },
                                { width: 100, targets: 5 }
                            ]}
                        />
                    </div>
                </div>
            </div>
    )
}