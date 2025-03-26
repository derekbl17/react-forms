import { useState } from "react";
import "./App.css";
import A from "./components/A";
import { CompB } from "./components/CompB";
import { CompA } from "./components/CompA";
import {
  BrowserRouter,
  Routes,
  Link,
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import TetaZita from "./components/TetaZita";
import Extras from "./components/Extras";
import { monsters } from "./assets/data.js";
import Monster from "./components/Monster";
import { zitaStages } from "./assets/zita";
import TetaZitaVeikia from "./components/TetaZitaVeikia";
import Root from "./components/Root";
import { dataLoader } from "./functions/dataLoader";
import Data from "./components/Data";
import Router from "./components/Router";



function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Root />}>
  //       <Route path="/data" element={<h1>data</h1>} />
  //       <Route index element={<Data />} loader={dataLoader} />
  //       <Route path="/tetazita/:id" element={<TetaZitaVeikia />} />
  //     </Route>
  //   )
  // );
  const [perPage,setPerPage]=useState(1)
  return (
    <BrowserRouter>
      <h1>Router tema</h1>
      <Link className="stylin" to="/">
        Namai
      </Link>
      <br />
      <Link className="stylin" to="/tetazita">
        Linkas to Teta Zita
      </Link>
      <br />
      <Link className="stylin" to="/extra">
        extras
      </Link>
      <br />
      {monsters.map(({ id, type }) => (
        <Link className="stylin" key={id} to={`/monsters/${id}`}>
          link to {type}
        </Link>
      ))}
      {zitaStages.map(({ text, img, id }) => (
        <Link className="stylin" key={id} to={`/tetazita/${id}`}>
          {text}
        </Link>
      ))}
      <Link className="stylin" to="/1">to pages</Link>
      <label htmlFor="hmPages">how many items per page to show?</label>
      <input onChange={(e)=>setPerPage(e.target.value<=1?1:e.target.value)} type="number" id="hmPages"/>
      <Routes>
        <Route
          path="/:currentPage"
          element={<Router mobs={monsters} perPage={perPage} />}
        ></Route>
        <Route path="/" element={<h2>Namai</h2>}></Route>
        <Route path="/tetazita" element={<TetaZita />}></Route>
        <Route path="/extra" element={<Extras />}></Route>
        <Route path="*" element={<h2>404 page not found</h2>}></Route>
        {/* {monsters.map(({ id, type }) => (
        <Route
          key={id}
          path={"/monsters/" + id}
          element={<h3>{type}</h3>}
        ></Route>
      ))} */}
        <Route
          path="/monsters/:id"
          element={<Monster monsters={monsters} />}
        ></Route>
        <Route
          path="/tetazita/:id"
          element={<TetaZitaVeikia zitaStages={zitaStages} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
