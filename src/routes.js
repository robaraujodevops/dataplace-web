import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "./services/auth";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Master from "./partials/Master";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/signin" component={ SignIn } />
            <Route exact path="/signup" component={ SignUp } />
            <PrivateRoute exact path="/admin/analytics" component={ Master } page="analytics" />
            <PrivateRoute exact path="/admin/unidades" component={ Master } page="unidades" />
            <PrivateRoute exact path="/admin/proprietarios" component={ Master } page="proprietarios" />
            <PrivateRoute exact path="/admin/predios" component={ Master } page="predios" />
            <PrivateRoute exact path="/admin/predios/:id" component={ Master } page="predio" />
            <Route exact path="/">
                <Redirect to="/admin/analytics" />
            </Route>
            <Route path="*" component={() => <h1>Page Not Found</h1> } />
        </Switch>
    </BrowserRouter>
);

export default Routes;