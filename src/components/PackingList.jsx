import initialItems from '../InitialItems';
import Item from './Item';

export default function PackingList() {
  return (
    <div className='list'>
      <ul>
        {initialItems.map(items => {
          return <Item key={items.id} item={items} />;
        })}
      </ul>
    </div>
  );
}
