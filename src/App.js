import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Content from "./components/Content";
import Songs from "./components/Songs";

const App = () => {
  const [token, setToken] = useState('')
  console.log(token)
  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login setToken={setToken}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/content" element={<Content />} />
          <Route path="/song/:id" element={<Songs token={token}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;
