import "./Auth.css";

function Signup() {
  return (
    <div className="signup">
      <h1>Sign UP</h1>
      <div className="content">
        <form>
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="text" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <input type="password" placeholder="Confirm password"></input>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
