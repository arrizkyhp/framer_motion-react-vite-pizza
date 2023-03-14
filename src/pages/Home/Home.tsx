import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { buttonVariants } from '@/motions';

const Home = () => (
  <motion.div
    className="home container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 1.5 }}
  >
    <motion.h2 animate={{}}>Welcome to Pizza Joint</motion.h2>
    <Link to="/base">
      <motion.button
        className="rounded-full"
        variants={buttonVariants}
        whileHover="hover"
        type="button"
      >
        Create Your Pizza
      </motion.button>
    </Link>
  </motion.div>
);

export default Home;
