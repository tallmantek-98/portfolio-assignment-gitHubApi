import React, { useContext } from "react";
import RepoCard from "./RepoCard";
import RepoContext from "../context/RepoContext";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const Homepage = () => {
  const { repos, setRepos } = useContext(RepoContext);

  const handleNext = (e) => {
    e.preventDefault();
    setRepos({ ...repos, currentPage: repos.currentPage + 1 });
  };

  const handleBack = (e) => {
    e.preventDefault();
    setRepos({
      ...repos,
      currentPage:
        repos.currentPage >= 1
          ? repos.currentPage - 1
          : (repos.currentPage = 1),
    });
  };

  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="max-w-[1350px] mx-auto">
        <div className=" grid grid-cols-3 ">
          {repos?.repositories?.map((repo) => (
            <RepoCard key={repo.id} {...repo} />
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-2">
          <button
            className="bg-[#4f66c8] disabled:bg-gray-500 hover:underline text-[18px] font-[500] py-2 px-6 rounded-[8px] flex items-center"
            onClick={handleBack}
            disabled={repos.currentPage === 1}
          >
            <NavigateBeforeIcon />
            Back
          </button>
          <button
            className="bg-[#4f66c8] hover:underline text-[18px] font-[500] py-2 px-6 rounded-[8px] flex items-center"
            onClick={handleNext}
          >
            <NavigateNextIcon />
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
