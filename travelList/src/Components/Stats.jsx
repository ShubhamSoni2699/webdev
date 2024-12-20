export function Stats({ items }) {
  let totalItems = items.length;
  let packedItems = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      You have {totalItems} items in your list , and you already packed{" "}
      {(packedItems / totalItems) * 100} (%)
    </footer>
  );
}
