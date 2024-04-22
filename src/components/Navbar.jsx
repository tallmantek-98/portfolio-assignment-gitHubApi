import React, { useEffect, useState, useContext } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import RepoContext from "../context/RepoContext";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 100 ? setScroll(true) : setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const { repos } = useContext(RepoContext);

  return (
    <nav
      className={`bg-[#4f66c8] text-white py-3 px-10 flex justify-between items-center ${
        scroll ? "fixed w-full shadow-lg" : ""
      }`}
    >
      <Link to="/">
        <GitHubIcon sx={{ fontSize: 50 }} />
      </Link>
      <h2 className="text-[40px] font-[600]">
        Dave's GitHub Repositories Portfolio
      </h2>
      <div className="w-[50px]">
        <img
          src={repos.avatar}
          alt="Profile image"
          className="w-full rounded-full object-contain"
        />
      </div>
    </nav>
  );
};

export default Navbar;
