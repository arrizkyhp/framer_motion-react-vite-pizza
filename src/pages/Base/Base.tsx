import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { usePizzaContext } from '@/contexts/PizzaContext';
import { buttonVariants, containerVariants } from '@/motions';

const nextVariants = {
  hidden: { x: '-100vw' },
  visible: { x: 0 },
  transition: { type: 'spring', stiffness: 120 },
};

const Base = () => {
  const { addBase, pizza } = usePizzaContext();

  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          const spanClass = pizza.base === base ? 'active' : '';

          return (
            <li key={base}>
              <motion.button
                type="button"
                onClick={() => addBase(base)}
                whileHover={{
                  scale: 1.3,
                  color: '#f8e112',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className={spanClass}>{base}</span>
              </motion.button>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariants}
          initial="hidden"
          animate="visible"
        >
          <Link to="/toppings">
            <motion.button
              className="button rounded-full"
              type="button"
              variants={buttonVariants}
              whileHover="hover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
