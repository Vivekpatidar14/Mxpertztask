import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://mxpertztestapi.onrender.com/api/sciencefiction"
      );
      if (response.status === 200) {
        setStories(response.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredStories =
    activeTab === "All"
      ? stories
      : stories.filter((story) => story.Status === activeTab);

  return (
    <div className="min-h-screen p-10 text-white bg-gradient-to-b from-gray-900 to-black">
      <div className="flex items-center justify-center text-center text-[2.5vw] font-extrabold font-sans text-yellow-400 drop-shadow-lg">
        Science Fiction Stories
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 my-8">
        {["All", "Published", "In Progress", "Draft", "Completed"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full transition-all text-lg font-semibold shadow-md 
                ${activeTab === tab ? "bg-yellow-500 scale-110 text-gray-900" : "bg-gray-700 hover:bg-gray-600 text-white"}`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Story Cards */}
      {loading ? (
        <div className="flex justify-center items-center w-full h-1/2">
          <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : filteredStories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredStories.slice(0, 4).map((story) => (
            <div
              key={story._id}
              onClick={() => navigate(`/story/${story._id}`)}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer border-2 border-yellow-500 relative overflow-hidden group"
            >
              {story.Image && story.Image.length > 0 && (
                <img
                  src={`https://ik.imagekit.io/dev24/${story.Image[0]}`}
                  alt={story.Title}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
              )}
              <h2 className="text-xl font-semibold mt-4 text-yellow-400 text-center">
                {story.Title}
              </h2>
              <span
                className={`absolute top-2 right-2 text-md px-4 py-2 font-semibold rounded-full transition-all 
                  ${story.Status === "New" ? "bg-blue-500" : 
                    story.Status === "In Progress" ? "bg-yellow-500" : "bg-green-500"}`}
              >
                {story.Status}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-xl font-bold mt-10 text-yellow-500">
          No data in this category
        </div>
      )}
    </div>
  );
};

export default Home;