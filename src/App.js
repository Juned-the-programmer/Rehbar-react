import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PdfView from "./components/PdfView";

const App = () => {
  const HomeWrapper = () => {
    return <Home />;
  };

  const PdfViewWrapper = () => {
    return <PdfView />;
  };

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeWrapper} />
          <Route exact path="/pdf" component={PdfViewWrapper} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
