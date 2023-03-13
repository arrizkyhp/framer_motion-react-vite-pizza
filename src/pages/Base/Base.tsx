import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { usePizzaContext } from '@/contexts/PizzaContext';

const Base = () => {
  const { addBase, pizza } = usePizzaContext();

  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      className="base container"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', delay: 0.5 }}
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
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <Link to="/toppings">
            <motion.button
              className="button rounded-full"
              type="button"
              whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 8px rgb(255,255,255)',
                boxShadow: '0px 0px 8px rgb(255,255,255)',
              }}
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
