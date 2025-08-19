import React, { useEffect } from "react";
import { AboutUsCard } from "../components/AboutUsCard";
import { useUserStore } from "../stores/usersStore";

const Home = () => {
  const { count, incrementCount, fetchUsers, users } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  console.log(users);

  return (
    <div>
      {count}
      <button onClick={incrementCount}>increment</button>
      <p>Home</p>
    </div>
  );
};

export default Home;
