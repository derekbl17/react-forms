import React from "react";
import { useParams } from "react-router-dom";

export default function Monster({ monsters }) {
  let { id } = useParams();
  const monsterExists = [...monsters].some(
    (monster) => monster.id === parseInt(id)
  );

  return (
    <div>
      {monsterExists ? (
        monsters
          .filter((el) => el.id === parseInt(id))
          .map((el) => <h2 key={el.id}>{el.type}</h2>)
      ) : (
        <h2>404</h2>
      )}
    </div>
  );
}
