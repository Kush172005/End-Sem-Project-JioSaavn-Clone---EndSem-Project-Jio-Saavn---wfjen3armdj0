import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Content from "./components/Content";
import Songs from "./components/Songs";
import Header from "./components/Header";

const App = () => {
  const [token, setToken] = useState("");
  const [logged, setLogged] = useState(false);

  return (
    <div className="root">
      <BrowserRouter>
        <ConditionalHeader logged={logged} />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route
            path="/login"
            element={<Login setToken={setToken} setLogged={setLogged} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/content" element={<Content token={token} />} />
          <Route path="/song/:id" element={<Songs token={token} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const ConditionalHeader = ({ logged }) => {
  const location = useLocation();
  const hideHeaderPaths1 = ["/login"];
  const hideHeaderPaths2 = ["/signup"];

  if (hideHeaderPaths1.includes(location.pathname)) {
    return null;
  }
  if (hideHeaderPaths2.includes(location.pathname)) {
    return null;
  }

  return <Header logged={logged} />;
};

export default App;
