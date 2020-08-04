import React from "react";
import { logout } from "../../services/auth";
import { useHistory } from "react-router-dom";
import { Button } from "./styles";

export default function SideBarFooter() {
    const history = useHistory()

    async function handleLogout() {
        await logout()
        history.go("/signin")
    }

    return (
        <div className="sidebar-footer hidden-small">
            <Button data-toggle="tooltip" data-placement="top" title="Settings">
                <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </Button>
            <Button data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
            </Button>
            <Button data-toggle="tooltip" data-placement="top" title="Lock">
                <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
            </Button>
            <Button data-toggle="tooltip" data-placement="top" title="Logout" onClick={handleLogout}>
                <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
            </Button>
        </div>
    )
}