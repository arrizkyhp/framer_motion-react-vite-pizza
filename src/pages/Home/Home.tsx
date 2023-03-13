import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home container">
    <h2>Welcome to Pizza Joint</h2>
    <Link to="/base">
      <button type="button">Create Your Pizza</button>
    </Link>
  </div>
);

export default Home;
