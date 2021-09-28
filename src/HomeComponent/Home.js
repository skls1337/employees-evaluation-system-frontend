import React, { useContext, useEffect, useState } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import api from "../api/api";

const Home = () => {
  const { state } = useContext(AuthContext);
  const [worker, setWorker] = useState({});

  const fetchWorker = async (id) => {
    api.get(`/workers/user/${id}`).then((res) => {
      setWorker(res.data.worker);
    });
  };

  useEffect(() => {
    fetchWorker(state.user.id);
  }, [state]);
  return (
    <div>
      <h1>Main Page</h1>
      <h1>{worker.id}</h1>
      <h1>{worker.fullName}</h1>
      <h1>{worker.position}</h1>
    </div>
  );
};

export default Home;
