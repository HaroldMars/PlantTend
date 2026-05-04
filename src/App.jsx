import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="Container">
      <p className="text">PlantTend</p>

      <div className="Container-box">
        <div className="Login-form">
          <p className="form-title">LOG IN</p>
        </div>
        <div className="form-group">
          <label for="username">Gmail:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your gmail account"
          />
        </div>
        <div className="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <p className="forget-pass">
          <a href="#">Forget Password</a>
        </p>
        <button onClick="alert('Login successful!')">LOG IN</button>
        <div className="create-account">
          <p>Not got an account yet?</p>
          <label className="create" for="create account">
            {" "}
            Create Account{" "}
          </label>
        </div>
      </div>

      <div className="absulote ml-12 mt-120 relative flex items-center my-8 text-green-600">
        ⎯⎯⎯⎯⎯
        <div className="">
          <span className="mx-4 text-black px-2">
            or log in with
          </span>
        </div>
        ⎯⎯⎯⎯⎯
      </div>

      <div className="intro-text">
        <p className="text-center">
          Welcome to PlantTend. This application is designed for plant
          enthusiasts and provides guidance on proper planting techniques.
        </p>
      </div>
    </div>
  );
}

export default App;
