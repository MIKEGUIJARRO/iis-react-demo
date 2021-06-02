import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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
                    <ul className="flex pb-8">
                        <li>
                            <Link to="/">
                                <Primary>
                                    Home
                                </Primary>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <Primary>
                                    About
                                </Primary>
                            </Link>
                        </li>
                        <li>
                            <Link to="/users">
                                <Primary>
                                    Users
                                </Primary>
                            </Link>
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
