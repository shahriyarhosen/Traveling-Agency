import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Page/Home.js";

function App() {
  return (
    <section className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
