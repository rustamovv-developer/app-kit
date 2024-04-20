import { Route, Routes } from "react-router-dom";
import "./App.css";
import Adv from "./components/adv/Adv";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import Like from "./pages/like/Like";

function App() {
  return (
    <div className="App">
      <Adv />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/like" element={<Like />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
