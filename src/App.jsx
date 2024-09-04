import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import AMC from "./components/AMC";
import SAD from "./components/SAD";
import Form from "./components/Form";
import Submitted from "./components/Submitted";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => setLoading(true);

    handleRouteChange();

    // Simulate loading time for demonstration
    const timer = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      {loading && <Loading />}
      <div className="navbar-container">
        <nav>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/AMC" className="navbar-link">Array Manipulation Challenge</Link>
            </li>
            <li className="navbar-item">
              <Link to="/SAD" className="navbar-link">String Anagram Detection</Link>
            </li>
            <li className="navbar-item">
              <Link to="/Form" className="navbar-link">Form Using Redux</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/AMC" element={<AMC />} />
        <Route path="/SAD" element={<SAD />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/submitted" element={<Submitted />} />
      </Routes>
    </div>
  );
}

export default App;
