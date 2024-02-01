import "./Auth.css";
// import Homepage
import { Link } from "react-router-dom";
import Signup from "./Signup";
import { useState } from "react";
function Login() {
  const [vv, setvv] = useState(false);
  const buttonclick = (e) => {
    console.log("Here");
    setvv(true);
  };
  return (
    <div>
      <div className="signup">
        <h1>Log In</h1>
        <div className="content">
          <form>
            <input type="text" placeholder="Email"></input>

            <input type="password" placeholder="Password"></input>
            <Link to={vv ? "/" : "/dashboard"}>
              <button type="submit" onClick={buttonclick}>
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
