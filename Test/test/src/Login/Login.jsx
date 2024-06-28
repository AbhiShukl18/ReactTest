import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./Action1";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
 
  const router = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      if (username && password) {
        // toast.success("Registration Successfull. Go for Login")
        console.log(user, "user")
        const response = {
          data: {
            success: true,
            message: "LOGIN Successfull.",
            userData: { name: "Abhi" },
          },
        };

        if (response.data.success) {
          // dispatch(login({user, payload:response.data.userData }));

          dispatch(login({ user: response.data.userData.name }));
          console.log(user, "user2")
          setUsername("");
          setPassword("");

          router("/home");
          // alert(response.data.message);
        }
      } else {
        alert("All fields are mandatory");
      }
    } catch (error) {}
  };

  return (
    <div style={{
      border:"2px solid black",
      width:"100%",
      height:"750px",
    backgroundColor:"wheat"
  }}>
     
        <div style={{
      // border:"2px solid black",
      width:"50%",
      height:"50%",
    backgroundColor:"wheat",
    margin:"auto",
    marginTop:"50px",
  }}>
          <h1>Login</h1>
          <form onSubmit={handleLogin} >
            <div style={{
      marginTop:"30px",        
      width:"400px",
      height:"60px",
      marginLeft:"290px",
      display:"flex",
      justifyContent:"space-between",
      lineHeight:"1.9"
  }}>
              <label style={{
                fontSize:"19px",
                fontWeight:"bold",
                lineHeight:"1.9",

              }}>Email:</label>
              <input style={{
                fontSize:"19px",
                fontWeight:"300px",
                marginLeft:"30px",
                width:"260px",
               height: "40px"
              }}
                type="email"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
             </div>
             <div style={{
      width:"400px",
      height:"60px",
      marginLeft:"290px",
      display:"flex",
      justifyContent:"space-between",
  }}>
              <label style={{
                fontSize:"19px",
                fontWeight:"bold",

              }}>Password:</label>
              <input style={{
                fontSize:"19px",
                fontWeight:"300px",
                marginLeft:"30px",
                width:"260px",
                height:"40px"
              }}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>

            <button
            style={{
             
              marginTop:"30px",
              width:"78px",
              height: "40px",
              fontSize:"20px",
              fontWeight:"bold",

            }}   type="submit">Login</button>
            
          </form>
        </div>
    
    </div>
  );
};

export default Login;
