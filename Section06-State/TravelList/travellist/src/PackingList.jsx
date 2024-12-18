import React from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 12, packed: false },
];
export default function PackingList() {
  return (
    <>
      <div className="list">
        <ul>
          {initialItems.map((item) => (
            <li key={item.id}>
              <span style={item.packed ? {textDecoration: "line-through"} : {}}>
                {item.description}
                {item.quantity}
              </span>
              <button>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
