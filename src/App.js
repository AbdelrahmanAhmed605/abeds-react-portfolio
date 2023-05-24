import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./components/sections/About";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Resume from "./components/sections/Resume";

function App() {
  return (
    <Router>
      <Header />

      {/* define route endpoints for different sections in the portfolio */}
      <Routes>
        {/* setting the "/" route to the about-me section will load the about-me section as the front page when a user first opens the application */}
        <Route path="/" element={<AboutMe />} />
        {/* the "/abeds-react-portfolio" route is the path for the github pages site that is created since that is the name of the repository */}
        <Route path="/abeds-react-portfolio" element={<AboutMe />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
