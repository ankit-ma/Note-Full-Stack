import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className="linkhome">
          <h1>Note Manager</h1>
        </Link>
      </div>
      <div className="right">
        <Link to="/signup">
          <button>SignUp</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
