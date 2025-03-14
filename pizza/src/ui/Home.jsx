import { useSelector } from "react-redux";
import CreateUser from "../feature/user/CreateUser";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="mt-4 text-center">
      <h1 className="mb-4 text-xl font-semibold text-stone-700">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? <CreateUser /> : <p>User alerady created</p>}
    </div>
  );
}

export default Home;
