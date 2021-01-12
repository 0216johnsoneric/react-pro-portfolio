import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Portfolio from "./components/Portfolio";
import AboutView from "./pages/About";
import ContactView from "./pages/Contact"

import Footer from "./components/Footer";

function App() {
  return (
    <Router>
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/about" component={AboutView} />
				<Route exact path="/contact" component={ContactView} />
			</Switch>
      <Footer />
		</Router>
  );
}

export default App;
