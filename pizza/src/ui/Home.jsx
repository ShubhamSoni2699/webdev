import CreateUser from "../feature/user/CreateUser";

function Home() {
  return (
    <div className="mt-4 text-center">
      <h1 className="mb-4 text-xl font-semibold text-stone-700">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
