import React from "react";

export default function CheckedList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input type="checkbox" defaultChecked={item.checked} />
            {item.name}
          </label>
        </li>
      ))}
    </ul>
  );
}
