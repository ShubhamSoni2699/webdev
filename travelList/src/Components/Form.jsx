import { useState } from "react";

export function Form({ onAddItems, items }) {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function submitForm(e) {
    e.preventDefault();

    if (!desc) return;

    const newItem = {
      id: items.length + 1,
      description: desc,
      quantity: quantity,
      packed: false,
    };

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
