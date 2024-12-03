import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CharactersCard } from "../component/charactersCard";
import { PlanetsCard } from "../component/planetsCard";
import { StarShipsCard } from "../component/starshipsCard";
import { useParams } from "react-router";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [charaters, setCharaters] = useState([]);
    const params = useParams();

    useEffect(() => {
        if (params.uid && params.entities === "characters") {
            actions.getCharactersById(params.uid);
        }
    }, []);

    useEffect(() => {
        if (params.uid && params.entities === "planets") {
            actions.getPlanetsById(params.uid);
        }
    }, []);
    useEffect(() => {
        if (params.uid && params.entities === "starships") {
            actions.getStarshipsById(params.uid);
        }
    }, []);

    return (
        <>
            <div className="container">
                <div>
                    <h1 className="text-danger mb-4">Characters</h1>
                    <div className="overflow-auto row flex-nowrap">
                        {store.characters && store.characters.length > 0 ? store.characters.map((character) => (<CharactersCard
                            key={character.uid} entities={character} entity="characters" addFavorites={actions.addFavorites} />)) : ""}
                    </div>
                </div>
                <div>
                    <h1 className="text-danger mb-4">Planets</h1>
                    <div className="overflow-auto row flex-nowrap">
                        {store.planets && store.planets.length > 0 ? store.planets.map((planet) => (<PlanetsCard
                            key={planet.uid} entities={planet} entity="planets" addFavorites={actions.addFavorites} />)) : ""}
                    </div>
                </div>
                <div>
                <h1 className="text-danger mb-4">Starships</h1>
                    <div className="overflow-auto row flex-nowrap">
                        {store.starships && store.starships.length > 0 ? store.starships.map((starships) => (<StarShipsCard
                            key={starships.uid} entities={starships} entity="starships" addFavorites={actions.addFavorites} />)) : ""}
                    </div>
                </div>
            </div>
        </>
    );
};
