import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navlinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "LeaderBoard",
      link: "/leaderboard",
    },
    {
      name: "Daily Quiz",
      link: "/daily-quiz",
    },
    {
      name: "Genre",
      link: "/genre",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-600">
        <h1
          className="text-3xl font-bold text-white"
          onClick={() => navigate("/")}
        >
          BrainyLingo
        </h1>
        <div className="flex items-center gap-6 text-white">
          {navlinks.map((item) => (
            <Link to={item.link}>
              <div key={item} className="cursor-pointer hover:text-gray-300">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        <button className="bg-blue-500 px-5 py-3 rounded-xl hover:bg-blue-600 transition">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
