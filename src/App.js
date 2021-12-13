import "./App.css";
import Layout from "./Layout/Layout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="theme-dark">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
