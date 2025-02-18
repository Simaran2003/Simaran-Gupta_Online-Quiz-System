import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/leaderboard/top").then((res) => setLeaders(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Leaderboard</h2>
      <ul>
        {leaders.map((leader, index) => (
          <li key={index}>
            User {leader.userId} - Score: {leader.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
