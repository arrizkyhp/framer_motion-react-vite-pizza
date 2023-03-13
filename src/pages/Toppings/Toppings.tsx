import { Link } from 'react-router-dom';

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
              <button type="button" onClick={() => addTopping(topping)}>
                <span className={spanClass}>{topping}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <Link to="/order">
        <button className="button" type="button">
          Order
        </button>
      </Link>
    </div>
  );
};

export default Toppings;
