import React from "react";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="py-4 px-6 top-0 w-full bg-[#B22222] fixed z-10">
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center text-4xl font-semibold text-white"
        >
          <BiCameraMovie className="w-35 h-35 mr-2 text-white" />
          {/* <div className="w-1.5 h-10 bg-white mr-3"></div> */}
          <span style={{ fontStyle: "italic" }}>Streamflix</span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <div className="flex gap-4">
            <Link
              to="/"
              className="px-2 py-2 text-white cursor-pointer hover:text-primary hover:font-semibold mr-3"
            >
              Home
            </Link>
            <Link
              to="/upcoming-movie"
              className="px-2 py-2 text-white cursor-pointer hover:text-primary hover:font-semibold mr-3"
            >
              UpComing
            </Link>
            <Link
              to="/top-rated-movie"
              className="px-2 py-2 text-white cursor-pointer hover:text-primary hover:font-semibold mr-3"
            >
              Top Rated
            </Link>
            <Link
              to="/search-movie"
              className="border border-white rounded-xl px-4 py-1 text-white cursor-pointer hover:text-primary hover:font-semibold mr-3 flex items-center"
            >
              <BsSearch className="mr-3" />
              Search
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
