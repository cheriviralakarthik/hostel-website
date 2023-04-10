import React, { useState } from "react";
import { IconMenu, IconLogin, IconSearch } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="xs:pl-10 pr-10 pt-12 space-y-10 ">
      <div className="flex justify-center pt-10">
        <nav className=" sm:w-[100%] h-20  bg-white rounded-lg text-gray-500  flex items-center lg:justify-between  text-xl md:flex justify-evenly  ">
          <div className="flex items-center ">
            <IconMenu size={30} />
          </div>
          <div className="flex justify-center items-center text-orange-500 ">
            <span>Looking for the hostels near your college? </span>
          </div>
          <div className="flex items-center   ">
            <IconLogin size={30} className="hover:stroke-cyan-500" />
          </div>
        </nav>
      </div>
      <div className="flex justify-center mt-10 xs:mt-20">
        <input
          className="sm:w-[35%] h-10 bg-white rounded-md border border-sky-500 hover:border-sky-800 text-center text-xl text-black"
          placeholder="Search for the Hostel"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button
          className="ml-5 "
          onClick={() => navigate("/receiver", { state: search })}
        >
          <IconSearch size={25} className="hover:stroke-green-500" />
        </button>
      </div>
      <div className="flex justify-evenly items-center ">
        <div>
          <img
            src={require("./cot.png")}
            alt="hey"
            className="-rotate-12 scale-75 hover:rotate-0"
          />
        </div>
        <div className="sm:h-120 sm:w-[28%] bg-white rounded-md text-left font-mono sm:text-2xl lg:text-5xl font-medium flex items-center hover:bg-rose-200">
          <span className="ml-2 object-contain">
            We are having the shared pg’s in your
            <p class="no-underline hover:underline">Local area</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
