import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/portfolio" component={Portfolio} />
			</Switch>
      <Footer />
		</Router>
  );
}

export default App;
