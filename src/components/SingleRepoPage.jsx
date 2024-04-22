import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import RepoContext from "../context/RepoContext";

const SingleRepoPage = () => {
  const { repoId } = useParams();
  const { repos } = useContext(RepoContext);

  const selectedRepo = repos.repositories.find(
    (repo) => repo.id === Number(repoId)
  );

  return (
    <div className="bg-gray-800 text-white h-screen flex justify-center items-center">
      <div className="border border-[#4f66c8] p-4 rounded-[8px] w-[600px]">
        <h2 className="text-[40px] font-[500] capitalize">
          {selectedRepo?.name}
        </h2>
        <p>Full Name: {selectedRepo?.full_name}</p>
        <p>Owner: {selectedRepo?.owner?.login}</p>
        <p>Date & time of creation: {selectedRepo?.created_at}</p>
        <p>Last updated at: {selectedRepo?.updated_at}</p>
        <p>
          Type of Repository: {!selectedRepo?.isPrivate ? "Public" : "Private"}
        </p>
      </div>
    </div>
  );
};

export default SingleRepoPage;
