import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import GameList from "./GameList.js";
import NewGame from "./NewGame.js";
import GameDetails from "./GameDetails";

function App() {
   const [page, setPage] = useState("/")
    
    return (
        <div>
            <NavBar onChangePage={setPage} />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/games">
                    <GameList />
                </Route>
                <Route exact path="/new">
                    <NewGame/>
                </Route>
                <Route path="/games/:id">
                    <GameDetails />
                </Route>
                <Route exact path="/mylist">
                    <Home />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default App;

