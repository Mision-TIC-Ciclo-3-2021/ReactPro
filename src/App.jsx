import Index from 'pages';
import RhodesianInfoPage from 'pages/test2';
import Layout from 'layouts/Layout';
import Hondapage from 'pages/honda';
import 'styles/styles.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <Layout>
            <Switch>
                
                <Route path="/honda">
                    <Hondapage />
                </Route>
                <Route path="/test2">
                    <RhodesianInfoPage />
                </Route>
                <Route path="/">
                    <Index />
                </Route>
            </Switch>
            </Layout>
        </Router>
    </div>
  );
}

export default App;
