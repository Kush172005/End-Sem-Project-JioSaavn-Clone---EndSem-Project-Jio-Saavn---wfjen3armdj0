import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ setToken, setLogged }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            projectID: "bng7dtu7whwk",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            appType: "music",
          }),
        }
      );

      const data = await response.json();
      setToken(data.token);

      if (response.ok) {
        toast.success("Login Successful");
        setLogged(true);
        navigate("/content");
        setEmail("");
        setPassword("");
        setError("");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Error logging in");
    }
  };

  return (
    <div className="container">
      <div className="left-column">
        <div className="content">
          <img
            srcSet="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/8c2f013457144ca195423e726c231708.png"
            className="logo"
            alt="Logo"
          />
          <div className="title">All Your Music.</div>
          <div className="subtitle">Anytime, anywhere.</div>
        </div>
      </div>
      <div className="right-column">
        <div className="form-container">
          <div className="form-header">Login To Your Account.</div>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <input
                placeholder="Enter Email..."
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <input
                placeholder="Enter Password..."
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Continue
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
        <div className="footer">
          <div className="footer-text">Don't have an account? </div>
          <button onClick={() => navigate("/signup")} className="login-link">
            Create one
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
