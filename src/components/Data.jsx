import React from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";

export default function Data() {
  const dogUrl = useLoaderData();
  const navigate = useNavigation();
  return (
    <div>
      {navigate.state === "loading" ? (
        <h1>Loading...</h1>
      ) : (
        <img src={dogUrl} alt="dog" style={{ height: "200px" }}></img>
      )}
    </div>
  );
}
