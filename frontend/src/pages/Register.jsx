import React from "react";
import { Layout } from "../component/Layout";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const payload={
    name: name,
    phone: phone,
    email: email,
    password: password,
  }
  const navigate =useNavigate();

  //form function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        payload
      );
      if(res.data.success){
        navigate("/login")
      }
      console.log(res);
    } catch (error) {
      console.log("error",error);
    }
  };
  return (
    <Layout>
      <div className="register">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                contact number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};
