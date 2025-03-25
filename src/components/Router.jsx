import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Paginator from "./Paginator";
import { monsters } from "../assets/data";

export default function Router({ perPage, mobs }) {
  const { currentPage = 1 } = useParams();
  const [visibleMobs, setVisibleMobs] = useState([]);

  useEffect(() => {
    const start = (currentPage - 1) * perPage;
    const end = currentPage * perPage;
    setVisibleMobs(mobs.slice(start, end));
  }, [currentPage, perPage, mobs]);

  return (
    <>
      <h3>{currentPage}</h3>
      <Paginator
        currentPage={currentPage}
        perPage={perPage}
        total={mobs.length}
      />
      {visibleMobs.map((el) => (
        <h3 key={el.id}>{el.type}</h3>
      ))}
    </>
  );
}
