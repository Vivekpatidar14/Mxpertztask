import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StoryDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Word Explorer"); // Default tab

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`
      );
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className=" min-h-screen p-10 text-white font-sans">
      {/* Header */}
      <div className="text-center text-4xl font-extrabold mt-6">
        <span className="text-purple-400">The Lost </span>
        <span className="text-blue-300">City </span>
        <span>of Future Earth</span>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mt-8">
        {["Word Explorer", "Story Adventure", "Brain Quest"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-full text-lg font-bold transition-all shadow-lg hover:scale-105 border-2 border-transparent ${
              activeTab === tab
                ? "bg-blue-500 text-white border-blue-700"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {tab === "Word Explorer" && "🔍 Word Explorer"}
            {tab === "Story Adventure" && "📖 Story Adventure"}
            {tab === "Brain Quest" && "🧠 Brain Quest"}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : activeTab === "Word Explorer" && data?.Wordexplore ? (
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl border-2 border-purple-500">
              <h2 className="text-2xl font-bold text-green-400">
                {data.Wordexplore[0].Noun} (Noun)
              </h2>
              <p className="mt-2 text-gray-300">
                {data.Wordexplore[0].Storyttext}
              </p>
              <img
                src={`https://ik.imagekit.io/dev24/${data.Wordexplore[0].Storyimage[0]}`}
                alt={data.Wordexplore[0].Noun}
                className="mt-4 w-full h-60 object-cover rounded-lg"
              />
              <p className="text-blue-400 font-bold text-[1vw] mt-2 font-sans">
                Synonyms: {data.Wordexplore[0].Synonyms}
              </p>
              <p className="text-red-400 font-bold text-[1vw] font-sans">
                Antonyms: {data.Wordexplore[0].Antonyms}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.Wordexplore.map((item, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-xl">
                  <img
                    src={`https://ik.imagekit.io/dev24/${item.Storyimage[0]}`}
                    alt={item.Noun}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  <p className="mt-3 text-gray-300 text-[1vw] text-center font-medium  font-sans">
                    {item.Storyttext}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : activeTab === "Story Adventure" && data?.Storyadvenure ? (
          <div>
            <h2 className="text-2xl font-bold text-purple-400 text-center">
              {data.Storyadvenure.Storytitle}
            </h2>
            <div className="grid grid-cols-3 gap-6 mt-6">
              {data.Storyadvenure.content.map((story, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-xl">
                  <img
                    src={`https://ik.imagekit.io/dev24/${story.Storyimage[0]}`}
                    alt="Story"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  {story.Paragraph.map((para, i) => (
                    <p key={i} className="mt-2 text-gray-300 text-md font-sans">
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : activeTab === "Brain Quest" && data?.Brainquest ? (
          <div className="grid grid-cols-2 gap-6">
            {data.Brainquest.map((quiz, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl">
                <h2 className="text-xl font-bold text-yellow-400">
                  {quiz.Question}
                </h2>
                <ul className="mt-3">
                  {quiz.Option.map((option, i) => (
                    <li
                      key={i}
                      className="bg-gray-700 p-3 rounded-lg mt-2 hover:bg-gray-600 cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-xl font-bold">No data available</div>
        )}
      </div>
    </div>
  );
};

export default StoryDetails;
