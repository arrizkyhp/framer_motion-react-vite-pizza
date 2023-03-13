import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h2>Page Not Found!</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
      praesentium nulla reprehenderit tenetur quae ab iure distinctio officia at
      minima!
    </p>

    <p>
      Go to the
      {' '}
      <Link
        className="text-primary-500 underline hover:text-primary-400"
        to="/"
      >
        Homepage
      </Link>
      .
    </p>
  </div>
);

export default NotFound;
