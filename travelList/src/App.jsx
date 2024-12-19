import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

let lastId = initialItems.length;

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <TravelList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}

function Form() {
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
    initialItems.push(newItem);
    lastId += 1;
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

function TravelList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return <footer className="stats">Stats</footer>;
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default App;
