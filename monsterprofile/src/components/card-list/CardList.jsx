import React from "react";
import "./cardList.css";

export const CardList = (users) => {


  return (
    <div className="card-list">
      {users.monsters.map((monster) => (
        <div key={monster.id} className="wrapper">
          <img
            
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            alt="monster"
          />
          <p className="name" key={monster.id}>{monster.name}</p>
          <p className="userEmail">{monster.email}</p>
        </div>
      ))}
    </div>

    
  );
};
