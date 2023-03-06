import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrementCount}>-</button>
      &nbsp;&nbsp;
      <span>Item Count</span>
      &nbsp;&nbsp; <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default MyComponent;
