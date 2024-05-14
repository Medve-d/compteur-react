import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, que l'on va appeler "count"
  const [count, setCount] = useState(0);

const increment = () => {
    setCount(count + 1);
};

const decrement = () => {
    if (count > 0)
    setCount(count - 1);
};

const reset = () => {
    setCount(0);
};

  return (
    <div className='compteur-compo'>
      <p>{count}</p>
      <button onClick={increment}>
        Augmenter le compteur
      </button>
      <button onClick={decrement}>
        Diminuer le compteur
      </button>
      <button onClick={reset}>Réinitialiser le compteur</button>
    </div>
  );
}

export default Counter;
