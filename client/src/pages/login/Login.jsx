import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const Login = () => {
  const {login} = useContext(AuthContext);
  const handleLogin =() => {
    login();
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            modi praesentium explicabo doloribus corporis amet, dignissimos enim
            dolor officia quae laborum adipisci labore odio ducimus ratione
            tempora, itaque fuga quasi!
          </p>
          <span>Dont you have an account.</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
