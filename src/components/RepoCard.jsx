import React from "react";
import { Link } from "react-router-dom";

const RepoCard = ({ name, language, created_at, private: isPrivate, id }) => {
  return (
    <div className="border border-[#4f66c8] w-[400px] h-[250px] mb-5 rounded-[8px] p-5 hover:scale-105 transition-all">
      <h2 className="text-[30px] font-[600] capitalize">Name: {name}</h2>
      <div className="flex flex-col mt-4 gap-2">
        <p>Language: {!language ? "N/A" : language}</p>
        <p>
          Date & time of creation:{" "}
          <span className="text-[14px] font-[600]">{created_at}</span>
        </p>
        <p>Type of Repository: {!isPrivate ? "Public" : "Private"}</p>
      </div>
      <div className="flex justify-end">
        <Link to={`/repo/${id}`}>
          <button className="hover:underline">View Repo</button>
        </Link>
      </div>
    </div>
  );
};

export default RepoCard;
