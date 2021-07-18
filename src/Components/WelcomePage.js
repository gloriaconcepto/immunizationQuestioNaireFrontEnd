import React, { memo, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Button } from "reactstrap";

const WelcomePage = memo(() => {
    const redirect = () => {
        console.log("hey am redirecting");
    };
    return (
        <div className="button-position">
        <h2 className="header-text">Text1</h2>
            <NavLink to={"/registration"}>
            
                <Button style={{ width: "12rem", color: "red", backgroundColor: "#35384F" }} onClick={redirect}>
                    Register
                </Button>{" "}
            </NavLink>
        </div>
    );
});
export default withRouter(WelcomePage);
