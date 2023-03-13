import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { usePizzaContext } from '@/contexts/PizzaContext';

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
    <div className="toppings container">
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
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(255,255,255)',
            boxShadow: '0px 0px 8px rgb(255,255,255)',
          }}
        >
          Order
        </motion.button>
      </Link>
    </div>
  );
};

export default Toppings;
