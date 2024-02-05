import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
