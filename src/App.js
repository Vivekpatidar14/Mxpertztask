import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import StoryDetails from "./Pages/StoryDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-900 to-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:id" element={<StoryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
