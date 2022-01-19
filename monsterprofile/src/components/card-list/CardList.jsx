import React from "react";
import "./cardList.css";

export const CardList = (users) => {
  return (
    <div className="card-list">
      {users.monsters.map((monster) => (
        <div class="wrapper">
          <img
            key={monster.id}
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            alt="monster"
          />
          <p class="name" key={monster.id}>{monster.name}</p>
          <p class="userEmail">{monster.email}</p>
        </div>
      ))}
    </div>
  );
};
