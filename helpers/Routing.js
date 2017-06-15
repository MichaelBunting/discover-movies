import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MainLayout from '../components/MainLayout';
import Home from '../views/Home';
import MovieInfo from "../views/MovieInfo";

const Routing = () => {
    return (
        <Router>
            <MainLayout>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/movie/:movieId/" component={MovieInfo} />
                    <Route path="*" render={() => {
                        return (
                            <div>
                                404 not found
                            </div>
                        );
                    }} />
                </Switch>
            </MainLayout>
        </Router>
    )
}

export default Routing;
