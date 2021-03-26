import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./services/auth";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
import Master from "./partials/Master";
import { Redirect } from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ SignUp } />
            <PrivateRoute exact path="/logout" component={ Logout } />
            <PrivateRoute exact path="/admin/analytics" component={ Master } />
            <PrivateRoute exact path="/admin/negociacoes" component={ Master } />
            <PrivateRoute exact path="/admin/imoveis" component={ Master } />
            <PrivateRoute exact path="/admin/contatos/:classe?" component={ Master } />
            <PrivateRoute exact path="/admin/predios/:classe?" component={ Master } />
            <PrivateRoute exact path="/admin/predio/:id" component={ Master } />
            <PrivateRoute exact path="/admin/agenda/" component={ Master } />
            <PrivateRoute exact path="/admin/configuracoes/:classe?" component={ Master } />
            <PrivateRoute exact path="/admin/perfil/:user?" component={ Master } />
            <PrivateRoute exact path="/" component={() => <Redirect to="/admin/analytics"/> } />
            <Route path="*" component={() => <h1>Page Not Found</h1> } />
        </Switch>
    </BrowserRouter>
);

export default Routes;