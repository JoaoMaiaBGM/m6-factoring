import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <Link to='/home'>
        <button>Home</button>
      </Link>
    </>
  );
};

export default Login;
