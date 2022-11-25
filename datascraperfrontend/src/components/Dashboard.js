import * as React from "react";
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from "react-router-dom";

export default function Dashboard() {

    const location = useLocation();
    // console.log(location);

    const user = {
        firstName: location.state.firstName,
        lastName: location.state.lastName,
        email: location.state.email,
        handles: location.state.handles
    }

    // console.log(user);

    return (
        <div>
            <header
                fontSize="48px"
                fontStyle="bold"
            >
                WELCOME {user.firstName}
            </header>
        </div>
    );
}