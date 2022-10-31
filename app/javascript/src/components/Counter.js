import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter component rendered");
  }, []);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button className="btn btn-primary" onClick={increment}>
        Increment
      </button>
      <button className="btn btn-secondary" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");
  createRoot(counter).render(<Counter />);
});
