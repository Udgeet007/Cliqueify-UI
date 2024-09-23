import "./navbar.scss";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkMode";
import { AuthContext } from "../../context/authContext";


const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Cliqueify</span>
        </Link>{" "}
        <HomeIcon />
       {darkMode ? <LightModeIcon onClick={toggle}/> : <DarkModeIcon onClick={toggle}/> } 
        <GridViewIcon />
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineIcon />
        <MailOutlineIcon />
        <NotificationsNoneIcon />
        <div className="user">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
