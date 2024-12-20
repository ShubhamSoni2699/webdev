import { useState } from "react";
import { Item } from "./Item";

export function TravelList({
  items,
  onDeleteItems,
  onUpdatePacked,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = [];
  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = items.filter((item) => item.packed);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onUpdatePacked={onUpdatePacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={onClearItems}>Clear</button>
      </div>
    </div>
  );
}
