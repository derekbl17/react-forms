import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TetaZitaVeikia({ zitaStages }) {
  let { id } = useParams();
  let navigate = useNavigate();
  const zitaIs = [...zitaStages].some((el) => el.id === parseInt(id));

  return (
    <div>
      <button onClick={() => navigate(-1)}>take me back!</button>
      {zitaIs ? (
        zitaStages
          .filter((el) => el.id === parseInt(id))
          .map((el) => (
            <div key={el.id}>
              <h2>{el.text}</h2>
              <img className="zitaImg" src={el.img}></img>
            </div>
          ))
      ) : (
        <h2>404 cia tetos nera</h2>
      )}
    </div>
  );
}
