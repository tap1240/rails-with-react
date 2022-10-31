import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);
  console.log("App component rendered");
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  createRoot(app).render(<App />);
});
