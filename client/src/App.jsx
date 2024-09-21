import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import RightBar from "./componets/rightbar/RightBar";
import Navbar from "./componets/navbar/Navbar";
import LeftBar from "./componets/leftBar/LeftBar";
import { Children } from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

export default function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    );
  };
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* Define the Layout route */}
          <Route path="/" element={<Layout />}>
            {/* Nested routes will be rendered in the Outlet component */}
            <Route path="/" element={<Home />} />
            <Route path="profile/:id" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

// import  Login  from './pages/login/Login.jsx';
// import  Register  from "./pages/register/Register";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//     <Router>
//       <Routes>
//         <Route path="/register" element={< Register/>} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>

// export default App;

// const App = () => (
//   <Router>
//     <Routes>
//       {/* <Route path="/" element={<Home />} /> */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//     </Routes>
//   </Router>
// );

// export default App;
// import React from 'react'

{
  /* <Route path="/" element={<Layout />, Children:[
  {
    path="/Home",
    element={<Home />}
  },{
    path="/profile/:id",
  element={<Profile />}
  }
  
]} /> */
}
