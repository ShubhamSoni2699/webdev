import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

let lastId = initialItems.length;

function App() {
  const [items, setItems] = useState(initialItems);
  function handleAddItems(newItem) {
    return setItems((i) => [...i, newItem]);
  }
  function handleDeleteItems(id) {
    return setItems((i) => i.filter((item) => id !== item.id));
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <TravelList items={items} onDeleteItems={handleDeleteItems} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}

function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function submitForm(e) {
    e.preventDefault();

    if (!desc) return;

    const newItem = {
      id: lastId + 1,
      description: desc,
      quantity: quantity,
      packed: false,
    };
    lastId += 1;
    onAddItems(newItem);
    setDesc("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={submitForm}>
      <h3>What do you need in a trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((no) => (
          <option key={no}>{no}</option>
        ))}
      </select>
      <input value={desc} onChange={(e) => setDesc(e.target.value)}></input>
      <button>Add</button>
    </form>
  );
}

function TravelList({ items, onDeleteItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onDeleteItems={onDeleteItems} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return <footer className="stats">Stats</footer>;
}

function Item({ item, onDeleteItems }) {
  const [isPacked, setIsPacked] = useState(item.packed);
  return (
    <li>
      <input
        type="checkbox"
        value={isPacked}
        onChange={() => setIsPacked((curr) => (curr ? false : true))}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

export default App;
