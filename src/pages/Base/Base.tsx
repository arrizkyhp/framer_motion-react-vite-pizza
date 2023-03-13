import { Link } from 'react-router-dom';

import { usePizzaContext } from '@/contexts/PizzaContext';

const Base = () => {
  const { addBase, pizza } = usePizzaContext();

  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          const spanClass = pizza.base === base ? 'active' : '';

          return (
            <li key={base}>
              <button type="button" onClick={() => addBase(base)}>
                <span className={spanClass}>{base}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <button className="button" type="button">
              Next
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;
