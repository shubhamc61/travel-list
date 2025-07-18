import { useState } from 'react';

export default function Item({ item, onDelete, onToggle }) {
  return (
    <li>
      <input
        value={item.packed}
        onChange={() => onToggle(item.id)}
        type='checkbox'
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity}
        &nbsp;&nbsp;
        {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
