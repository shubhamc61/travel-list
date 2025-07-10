import { useState } from 'react';

export default function Item({ item, onDelete }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity}
        &nbsp;&nbsp;
        {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
