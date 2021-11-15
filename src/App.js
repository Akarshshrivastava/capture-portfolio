// import "./App.css";
// Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
// Import Router
import { Switch, Route, useLocation } from "react-router-dom";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Import Animate Presence
import {AnimatePresence} from 'framer-motion'

import ScrollTop from "./components/ScrollTop";
function App() {
  const location = useLocation()
  // console.log(location);
  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
