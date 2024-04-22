import React, { useState, useEffect } from "react";
import RepoContext from "./RepoContext";
import axios from "axios";

const RepoContextProvider = ({ children }) => {
  const [repos, setRepos] = useState({
    isloading: true,
    repositories: [],
    currentPage: 1,
    avatar: "",
  });

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const [avatarRes, repoRes] = await Promise.all([
          axios.get("https://api.github.com/users/tallman98"),
          axios.get(
            `https://api.github.com/users/tallman98/repos?per_page=9&page=${repos.currentPage}`
          ),
        ]);

        const { avatar_url: avatar } = avatarRes.data;
        const repositories = repoRes.data;

        setRepos({ ...repos, repositories, isloading: false, avatar });
      } catch (err) {
        console.error("Something happened", err);
        return err;
      }
    };

    fetchRepos();
  }, [repos.currentPage]);

  return (
    <RepoContext.Provider value={{ repos, setRepos }}>
      {children}
    </RepoContext.Provider>
  );
};

export default RepoContextProvider;
