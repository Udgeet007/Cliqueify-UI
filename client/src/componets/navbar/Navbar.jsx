import "./navbar.scss";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Cliqueify</span>
        </Link>{" "}
        <HomeIcon />
        <DarkModeIcon />
        <GridViewIcon />
        <div className="search">
        <SearchIcon />
        <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineIcon/>
        <MailOutlineIcon/>
        <NotificationsNoneIcon/>
        <div className="user">
          <img src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span>Toby Mac</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
