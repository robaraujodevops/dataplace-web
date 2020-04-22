import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./services/auth";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/signin" component={ SignIn } />
            <Route path="/signup" component={ SignUp } />
            <PrivateRoute path="/admin" component={() => <h1>App</h1> } />
            <Route path="*" component={() => <h1>Page Not Found</h1> } />
        </Switch>
    </BrowserRouter>
);

export default Routes;