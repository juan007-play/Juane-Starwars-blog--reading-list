import React, { useState, useContext, useEffect } from "react";
import { Characters } from "../component/Characters";
import { Planets } from "../component/planets";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { StartShips } from "../component/starships";

export const Demo = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [character, setCharacter] = useState();
    const [planet, setPlanet] = useState();
    const [starships, setStarShips] = useState();


    useEffect(() => {
        if (params.uid && params.entities === "characters") {
            actions.getCharactersById(params.uid, setCharacter);
        }
    }, [params]);

    useEffect(() => {
        if (params.uid && params.entities === "planets") {
            actions.getPlanetsById(params.uid, setPlanet);
        }
    }, [params]);

    useEffect(() => {
        if (params.uid && params.entities === "starships") {
            actions.getInitialStarships(params.uid, setStarShips);
        }
    }, [params]);


    return (

        <div className="container">
            <div>
                {character ?
                    <Characters
                        key={character.uid} entities={character} entity="characters" /> : ""}
            </div>
            <div>
                {planet ?
                    <Planets
                        key={planet.uid} entities={planet} entity="planets" /> : ""}
            </div>
            <div>
                {starships ?
                    <StartShips
                        key={starships.uid} entities={starships} entity="starships" /> : ""}
            </div>
        </div>
    );
};