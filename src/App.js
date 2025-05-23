import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import StoryDetails from "./Pages/StoryDetails";
import Navbar from "./components/Navbar";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <div
      className="w-full bg-gradient-to-b from-blue-900 to-black h-full"
      style={{
        backgroundImage: "url('/bg.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/story/:id" element={<StoryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
