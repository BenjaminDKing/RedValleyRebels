import { Routes, Route, Navigate } from "react-router-dom"; 

// Pages:
import Home from "./components/pages/Home";
import Activities from "./components/pages/Activities";
import Contact from "./components/pages/Contact";
import FAQ from "./components/pages/FAQ";
import Horses from "./components/pages/Horses";
import Location from "./components/pages/Location";

// Components:
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./app.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <Routes>
          <Route 
            exact
            path="/*"
            element={ <Home /> }
          />
          <Route 
            path="/activities"
            element={ <Activities /> }
          />
          <Route 
            path="/horses"
            element={ <Horses /> }
          />
          <Route 
            path="/location"
            element={ <Location />}
          />
          <Route 
            path="/contact"
            element={ <Contact /> }
          />
          <Route 
            path="/faq"
            element={ <FAQ />}
          />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
