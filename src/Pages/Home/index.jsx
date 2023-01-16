import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </>
  );
};

export default Home;
