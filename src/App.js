import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PdfView from "./components/PdfView";
import Nav from "./components/Nav";

const App = () => {
  const [pdf,setPdf] = useState(null);
  const [backIcon, setBackIcon] = useState(false);
  const [AD, setAD] = useState(true);

  const HomeWrapper = () => {
    return <Home setPdf={setPdf} setBackIcon={setBackIcon} AD={AD} setAD={setAD} />;
  };

  const PdfViewWrapper = () => {
    return <PdfView pdf={pdf} setBackIcon={setBackIcon} AD={AD} setAD={setAD} />;
  };

  return (
    <React.Fragment>
      <Router>
        <Nav backIcon={backIcon} setAD={setAD} />
        <Switch>
          <Route exact path="/" component={HomeWrapper} />
          <Route exact path="/pdf" component={PdfViewWrapper} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
