import React from "react";
import { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "../Componants/Login";
import "./register.css";
export default function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("");
  const [login, setLogin] = useState(true);
  const [error, setError] = useState(false);

  // on form submit...
  const handleFormSubmit = (e) => {
    if (!name || !age || !email || !password || !position) {
      setError(true);
    } else {
      // prevents browser refresh
      e.preventDefault();
      localStorage.setItem("myEmail", JSON.stringify(email));
      localStorage.setItem("myPassword", JSON.stringify(password));
      console.log("Saved in Local Storage");
      setError(false);
      setLogin(!login);
    }
  };
  // Directly to the login page
  const handleClick = () => {
    setLogin(!login);
  };
  return (
    <>
      {login ? (
        <form
          class="container bg-warning text-dark"
          onSubmit={handleFormSubmit}
        >
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Age"
              name="name"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email"
              name="name"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Password"
              name="name"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Position</label>
            <Form.Control
              as="select"
              onChange={(e) => setPosition(e.target.value)}
            >
              <option>Developer</option>
              <option>CEO</option>
              <option>UI UX</option>
              <option>Back-end</option>
              <option>Front-end</option>
            </Form.Control>
          </div>
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Register
          </button>
          <p className="forgot-password text-right">
            Already registered{" "}
            <a href="#" onClick={handleClick}>
              log in?
            </a>
          </p>
          {error && (
            <Alert color="primary" variant="danger">
              Every Field is important!
            </Alert>
          )}
        </form>
      ) : (
        <Login />
      )}
    </>
  );
}
