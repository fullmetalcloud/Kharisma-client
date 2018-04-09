import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Questionnaire from './App';
import Results from './results';

export default (
<BrowserRouter>
    <Switch>
            <Route exact path="/" component={Questionnaire} />
            <Route path="/results" component={Results}/>
    </Switch>
</BrowserRouter>
);
