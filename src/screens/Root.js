import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import { Home } from "./Home/Home";
import { About } from './About/About';
import { Users } from "./Users/Users";
import { Primary } from '../components/Buttons/Primary';


export const Root = () => {
    return (
        <Router>
            <div className="px-8 max-w-screen-lg">
                <nav>
                    <ul className="flex py-4">
                        <li>
                            <NavLink to="/" activeClassName="">
                                <Primary>
                                    Home
                                </Primary>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                <Primary>
                                    About
                                </Primary>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/users">
                                <Primary>
                                    Users
                                </Primary>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
