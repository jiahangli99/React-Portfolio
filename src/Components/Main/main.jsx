import React from 'react';
import { Route, Switch } from "react-router-dom";
import Cover from '../../pages/Cover/cover';
import About from '../../pages/About/about';
import Skills from '../../pages/Skills/skills';
import './main.css'

function main(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Cover />
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
            <Switch>
                <Route exact path='/skills'>
                    <Skills />
                </Route>
            </Switch>
        </div>
    );
}

export default main;