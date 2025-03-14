import { useSelector } from "react-redux";

function User() {
  const username = useSelector((state) => state?.user?.username);
  return (
    <div>
      <p>{username}</p>
    </div>
  );
}

export default User;
