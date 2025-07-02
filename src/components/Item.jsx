export default function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity}
        &nbsp;&nbsp;
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
