import React from "react";
import { Layout } from "../component/Layout";
import "../App.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email,setEmail] =React.useState();
  const [password,setPassword] = React.useState();
  const payload ={
    email:email,
    password: password
  }
  const navigate =useNavigate();
  const handleSubmit =async (e) =>{
    e.preventDefault();
    try{
      const res =await axios.post("http://localhost:5000/api/v1/auth/login",payload);
     
      if(res.data.success){
        navigate("/");
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("user",res.data.user.name)
      }else{
        alert(res.data.message)
      }
    }catch(error){
      console.log(error)
    }
    
  }

  return (
    <Layout>
      <div className="login">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-3" >
          <label htmlFor="exampleInputEmail1" classname="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e)=>{setEmail(e.target.value)}}
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
            onChange={(e)=>{setPassword(e.target.value)}}
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
