import React from "react";
import { Switch, Route } from "react-router-dom";
import Registration from "../Components/Registration";
import WelcomePage from "../Components/WelcomePage";
const Routes = (props) => {
    return (
        <div>
            <Switch>
                <Route exact={true} path={`/registration`} component={Registration} />
                <Route exact={true} path={`/`} component={WelcomePage} />
            </Switch>
        </div>
    );
};

export default Routes;
