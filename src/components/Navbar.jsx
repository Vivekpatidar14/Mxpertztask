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
      <div className="flex justify-between items-center px-20 py-6 ">
        <h1
          className="text-3xl font-bold text-white"
          onClick={() => navigate("/")}
        >
          BrainyLingo
        </h1>
        <div className="flex items-center gap-6 text-white">
          {navlinks.map((item) => (
            <Link to={item.link}>
              <div key={item} className="cursor-pointer text-[1vw] font-medium hover:text-gray-300">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        <button className="bg-[linear-gradient(90deg,rgba(2,0,36,1)_0%,rgba(9,9,121,1)_10%,rgba(0,212,255,1)_100%)] px-5 py-3 text-[1.2vw] font-medium text-white hover:bg-blue-600 transition p-10 rounded-full">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
