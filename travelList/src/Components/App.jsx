import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { TravelList } from "./TravelList";
import { Stats } from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  function handleAddItems(newItem) {
    return setItems((i) => [...i, newItem]);
  }
  function handleClearItmes() {
    const confirm = window.confirm(
      "Are you really want to deleating the entire list???"
    );
    if (confirm) {
      return setItems([]);
    }
  }
  function handleDeleteItems(id) {
    return setItems((i) => i.filter((item) => id !== item.id));
  }
  function handleUpdatePacked(id) {
    return setItems((i) =>
      i.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} items={items} />
      <TravelList
        items={items}
        onDeleteItems={handleDeleteItems}
        onUpdatePacked={handleUpdatePacked}
        onClearItems={handleClearItmes}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
