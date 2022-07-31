import React from "react";
import siteInConstruction from "./assets/site-in-construction.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={siteInConstruction}
          className="App-site-in-construction"
          alt="site in construction"
        />
        <p>
          Hi there! My portfolio is currently under construction. To find out
          more about my work click{" "}
          <a
            className="App-link"
            href="https://www.linkedin.com/in/lucia-seggiaro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </header>
    </div>
  );
}

export default App;
