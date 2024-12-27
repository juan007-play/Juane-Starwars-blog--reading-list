import React, { useState, useContext, useEffect, use } from "react";
import { Characters } from "../component/Characters";
import { Planets } from "../component/planets";
import { StartShips } from "../component/starships";
import { Vehicles } from "../component/vehicles";
import { Species } from "../component/species";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


export const Demo = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [character, setCharacter] = useState();
    const [planet, setPlanet] = useState();
    const [starship, setStarShip] = useState();
    const [vehicles, setVehicles] = useState();
    const [species, setSpecies] = useState();


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
            actions.getInitialStarships(params.uid, setStarShip);
        }
    }, [params]);

    useEffect (() => {
        if(params.uid && params.entities === "vehicles"){
            actions.getInitialVehicles(params.uid, setVehicles);
        }
    },[params])

    useEffect (() => {
        if(params.uid && params.entities === "species"){
            actions.getInitialSpecies(params.uid, setSpecies);
        }
    },[]);


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
                {starship ?
                    <StartShips
                        key={starship.uid} entities={starship} entity="starships" /> : ""}
            </div>
            <div>
                {vehicles ?
                    <Vehicles
                        key={vehicles.uid} entities={vehicles} entity="vehicles" /> : ""}
            </div>
            <div>
                {species ?
                    <Species
                        key={species.uid} entities={species} entity="species" /> : ""}
            </div>
        </div>
    );
};