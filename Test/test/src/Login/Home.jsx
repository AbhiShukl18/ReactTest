import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './Action1';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const router=useNavigate();
  console.log(user,"user3")
//   console.log(user1, "user1")

  const handleLogout = () => {
    dispatch(logout());
    router("/redux-login") 
  };

  return (
    <div>
      <h1>Hi!! {user.user}  </h1>
      <button 
      style={{
             
        marginTop:"30px",
        width:"82px",
        height: "40px",
        fontSize:"20px",
        fontWeight:"bold",

      }}  onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
