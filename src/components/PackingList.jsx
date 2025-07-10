import Item from './Item';

export default function PackingList({ items, onDelete }) {
  return (
    <div className='list'>
      <ul>
        {items.map(items => {
          return <Item onDelete={onDelete} key={items.id} item={items} />;
        })}
      </ul>
    </div>
  );
}
