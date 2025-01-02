import { useState } from "react";
import "./index.css";
import "./App.css";

let data = [
  {
    id: 1,
    name: "Shatrughan",
    image: `https://i.pravatar.cc/?u=${Math.ceil(Math.random() * 10000)}`,
    balance: 0,
  },
  {
    id: 2,
    name: "Yogesh",
    image: `https://i.pravatar.cc/?u=${Math.ceil(Math.random() * 10000)}`,
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(data);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [showAddFriend, setShowAddfriend] = useState(false);

  function handleAddFriend(newFriend) {
    setFriends([...friends, newFriend]);
  }

  function onSelectFriend(id) {
    const lenghtSelectedFriends = selectedFriends.length;
    const checkFriends = friends.filter((friend) => friend.id === id);
    const checkSelectedFriends = selectedFriends.filter(
      (friend) => friend.id === id
    );

    if (lenghtSelectedFriends === 0) {
      setSelectedFriends([...checkFriends]);
    } else if (checkSelectedFriends.length !== 0) {
      setSelectedFriends(selectedFriends.filter((friend) => friend.id !== id));
    } else {
      setSelectedFriends((curr) => [...curr, ...checkFriends]);
    }
  }
  return (
    <div className="app">
      <div className="sidebar">
        <ListFriends onSelect={onSelectFriend} friends={friends} />
        {showAddFriend && <AddFriendForm onChange={handleAddFriend} />}
        <Button onSelect={() => setShowAddfriend(!showAddFriend)}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriends.length && (
        <Split friends={friends} selectedFriends={selectedFriends} />
      )}
    </div>
  );
}

function ListFriends({ onSelect, friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onSelect={onSelect}></Friend>
      ))}
    </ul>
  );
}

function Friend({ friend, onSelect }) {
  return (
    <li>
      <img src={friend.image} alt="pitcure" />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}₹ this much
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} ows you {Math.abs(friend.balance)}₹
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onSelect={() => onSelect(friend.id)}>Select</Button>
    </li>
  );
}

function AddFriendForm({ onChange }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/");
  const id = crypto.randomUUID();
  function onSubmit(e) {
    e.preventDefault();
    const newFriend = {
      name: name,
      image: `${image}?u=${id}`,
      balance: 0,
      id: id,
    };
    onChange(newFriend);
  }

  return (
    <form className="add-friend-form" onSubmit={onSubmit}>
      <label>🧑‍🤝‍🧑 Friend Name</label>
      <input
        type="text"
        placeholder="Friend Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>🧒 Friend Profile Image</label>
      <input
        type="text"
        placeholder="Friend Photo"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <Button>Add</Button>
    </form>
  );
}

function Button({ children, onSelect }) {
  return (
    <button className="button" onClick={onSelect}>
      {children}
    </button>
  );
}

function Split({ friends, selectedFriends }) {
  const [billValue, setBillValue] = useState(0);
  const [checkSplitEqually, setCheckSplitEqually] = useState(true);
  const [splitValue, setSplitValue] = useState(0);
  function handleSetBillValue(e) {
    setBillValue(e.target.value);
  }
  function handleCheckEqually() {
    setCheckSplitEqually((curr) => !curr);
  }
  function calculateSplitBill(e) {
    e.preventDefault();
    const noOfFriends = selectedFriends.length + 1;
    const splitV = Number(billValue) / noOfFriends;
    setSplitValue(splitV);
  }
  return (
    <form className="form-split-bill" action="submit">
      <h2>Split A Bill 🧾</h2>

      <label>💰 Value to be split</label>
      <input
        type="number"
        placeholder="Value in ₹"
        value={billValue}
        onChange={handleSetBillValue}
      ></input>

      <label>Split Equaly</label>
      <input
        type="checkbox"
        checked={checkSplitEqually}
        value={checkSplitEqually}
        onChange={handleCheckEqually}
      ></input>

      <label>Your Expense</label>
      <input
        readOnly={checkSplitEqually}
        type="number"
        placeholder="Value in ₹"
        value={splitValue}
      ></input>

      {selectedFriends.map((friend) => (
        <>
          <label>{`${friend.name} Expense`}</label>
          <input
            readOnly={checkSplitEqually}
            type="number"
            placeholder="Value in ₹"
            value={splitValue}
          ></input>
        </>
      ))}

      <label>Who's paying the bill 🤑</label>
      <select>
        <option>You</option>
        {friends.map((friend) => (
          <option value={friend.name} key={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
      <Button onSelect={(e) => calculateSplitBill(e)}>Split</Button>
    </form>
  );
}

export default App;
