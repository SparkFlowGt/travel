export default function Stats({ items }) {
  if (!items.lenght)
    return (
      <p className="footer">
        <em>Start adding some items to your packing list</em>
      </p>
    );

  const numItems = items.lenght;
  const numPacked = items.filter((item) => item.packed).lenght;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? " You got everithing ready to go"
          : `👜 You have a ${numItems} items on your list, and you already packed X ${numPacked}`}
      </em>
    </footer>
  );
}
