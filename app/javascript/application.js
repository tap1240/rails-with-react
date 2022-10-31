// Entry point for the build script in your package.json
import React from "react";
import { createRoot } from "react-dom/client";

import Counter from "./src/components/Counter";
import HelloMessage from "./src/components/Hello";

document.addEventListener("DOMContentLoaded", () => {
  const hello = document.getElementById("hello");
  const counter = document.getElementById("counter");

  createRoot(hello).render(<HelloMessage name="Tap" />);
  createRoot(counter).render(<Counter />);
});

// document.addEventListener("DOMContentLoaded", () => {
//   const hello = document.getElementById("hello");
//   createRoot(hello).render(<HelloMessage name="Tap" />);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const counter = document.getElementById("counter");
//   createRoot(counter).render(<Counter />);
// });
