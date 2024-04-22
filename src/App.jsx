import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";
import SingleRepoPage from "./components/SingleRepoPage";
import ErrorPage from "./components/ErrorPage.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" errorElement={<ErrorPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="repo">
          <Route path=":repoId" element={<SingleRepoPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
