import React from "react";
import "./cardList.css";

export const CardList = (users) => {
  return (
    <div className="card-list">
      {users.monsters.map((monster) => (
        <div class="wrapper">
          <img
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            alt="monster"
          />
          <h2 key={monster.id}>{monster.name}</h2>
          <p>{monster.email}</p>
        </div>
      ))}
    </div>
  );
};
