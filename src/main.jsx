import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RepoContextProvider from "./context/RepoContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RepoContextProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </RepoContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
