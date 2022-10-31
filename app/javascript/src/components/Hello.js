import React from "react";

export default function HelloMessage({ name }) {
  return (
    <div className="m-5 p-5 bg-white flex justify-center">
      <h1 className="text-2xl font-bold">Hello, {name}!</h1>
    </div>
  );
}

