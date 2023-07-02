import React, { useEffect, useState } from "react";
import GameItem from "./GameItem";
import CategoryFilter from "./CategoryFilter";
import { useHistory } from "react-router-dom";

function GameList() {
  const [games, setGames] = useState([]);
  const [selectedCat, setSelectedCat] = useState("All");
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(1)
  
  
  let title = "Game List";

  useEffect(() => {
    fetch("http://localhost:3001/games")
      .then((r) => r.json())
      .then((data) => setGames(data))
      .catch((e) => alert(e.message + " data please start json server"));
  }, [count]);

  const cat = games.map((i) => i.genre);
  const categories = ["All", ...new Set(cat)];
  let gameDisplayed = [];

  if (useHistory().location.pathname === "/favorites") {
    gameDisplayed = games
      .filter((g) => {
        return g.favorite === true;
      })
      .filter((g) => {
        if (selectedCat === "All") {
          return true;
        } else {
          return selectedCat === g.genre;
        }
      })
      .filter((i) => i.title.toLowerCase().includes(search.toLowerCase()));
    title = "Favorites";
  } else {
    gameDisplayed = games
      .filter((g) => {
        if (selectedCat === "All") {
          return true;
        } else {
          return selectedCat === g.genre;
        }
      })
      .filter((i) => i.title.toLowerCase().includes(search.toLowerCase()));
    title = "Games";
  }

  const gameItems = gameDisplayed.map((games) => (
    <GameItem
      key={games.id}
      id={games.id}
      star={games.favorite}
      name={games.title}
      genre={games.genre}
      thumb={games.thumbnail}
      setCount={setCount}
      count={count}
    />
  ));

  return (
    <div id="games-list">
      <h2>{title}</h2>
      <div>
        <CategoryFilter
          categories={categories}
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div className="card-container">{gameItems}</div>
    </div>
  );
}

export default GameList;
