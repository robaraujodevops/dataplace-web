import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom";
import TileCount from "../../main_components/TileCount";
import { RootContext } from "../../contexts/root";
import DateTime from "../../partials/DateTime";

Analytics.propTypes = {
    page: PropTypes.string.isRequired
}
export default function Analytics({page}) {
    const param = useParams().classe;
    const [classe, setClasse] = useState(param);
    const { userContext } = useContext(RootContext);

    if (classe !== param) setClasse(param)

    return (
        <>
        <TileCount />
        <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="x_panel">
                <div className="x_title">
                    <h2>Bom dia, {userContext.name} {userContext.last_name}</h2>
                    <DateTime></DateTime>
                    {/* <ul className="nav navbar-right panel_toolbox">
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
                    </ul> */}
                </div>
            </div>
        </div>
        </>
    )
}