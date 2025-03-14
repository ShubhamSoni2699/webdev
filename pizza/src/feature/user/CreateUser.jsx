import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-72 rounded-3xl bg-amber-200 p-2 placeholder:text-center placeholder:font-black placeholder:text-stone-600 focus:ring focus:ring-amber-400 focus:ring-offset-1 focus:outline-none"
      />

      {username !== "" && (
        <div>
          <button className="mt-3 rounded-full bg-amber-300 p-2 hover:cursor-pointer focus:cursor-pointer">
            Start ordering
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
