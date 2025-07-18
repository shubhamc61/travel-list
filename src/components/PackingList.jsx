import Item from './Item';

export default function PackingList({ items, onDelete, onToggle, deleteAll }) {
  return (
    <div className='list'>
      <ul>
        {items.map(items => {
          return (
            <Item
              onDelete={onDelete}
              onToggle={onToggle}
              key={items.id}
              item={items}
            />
          );
        })}
      </ul>
      <button onClick={() => deleteAll()}>clear list </button>
    </div>
  );
}
