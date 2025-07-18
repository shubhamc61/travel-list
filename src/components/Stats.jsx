export default function Stats({ items }) {
  const packed = items.filter(item => item.packed).length;
  const percent = Math.round((packed / items.length) * 100);
  console.log(packed, 'packed');
  return (
    <footer className='stats'>
      <em>
        {percent !== 100
          ? ` You have ${
              items.length
            } items on your list and you have already packed   ${packed}  (${
              isNaN(percent) ? 0 : percent
            }%)
       `
          : ' You are ready to Go!!'}
      </em>
    </footer>
  );
}
