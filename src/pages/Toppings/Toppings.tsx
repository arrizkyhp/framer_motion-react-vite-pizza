import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { usePizzaContext } from '@/contexts/PizzaContext';
import { buttonVariants, containerVariants } from '@/motions';

const Toppings = () => {
  const { addTopping, pizza } = usePizzaContext();
  const toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          const spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <li key={topping}>
              <motion.button
                type="button"
                onClick={() => addTopping(topping)}
                whileHover={{
                  scale: 1.3,
                  color: '#f8e112',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className={spanClass}>{topping}</span>
              </motion.button>
            </li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          className="button rounded-full"
          type="button"
          variants={buttonVariants}
          whileHover="hover"
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
