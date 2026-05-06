import "./App.css";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
    <main>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favourites" element={<Favourites/>} />
      </Routes>
      </main>
    </>
  );
};

export default App;
