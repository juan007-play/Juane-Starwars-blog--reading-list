import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CharactersCard } from "../component/charactersCard";
import { PlanetsCard } from "../component/planetsCard";
import { StarShipsCard } from "../component/starshipsCard";
import { VehiclesCard } from "../component/vehiclesCard";
import { SpeciesCard } from "../component/speciesCard";
import { useParams } from "react-router";
import starwar from "../../img/starwar.png"



export const Home = () => {
    const { store, actions } = useContext(Context);
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

    useEffect (() => {
        if(params.uid && params.entities === "vehicles"){
            actions.getInitialVehiclesById(params.uid);
        }
    },[]);

    useEffect (() => {
        if(params.uid && params.entities === "species"){
            actions.getInitialSpeciesById(params.uid);
        }
    },[]);
    
    const backgroundStyle = { backgroundImage: `url(${starwar})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '40%', 
        width: '100%'};

    return (
        <>
   
            <div className="container">
                <div style={backgroundStyle}>
                <div>
                    <h1 className="text-danger my-4">Characters</h1>
                    <div className="overflow-auto row flex-nowrap">
                        {store.characters && store.characters.length > 0 ? store.characters.map((character) => (<CharactersCard
                            key={character.uid} entities={character} entity="characters" addFavorites={actions.addFavorites} />)) : ""}
                    </div>
                </div>
                <div>
                    <h1 className="text-danger my-4">Planets</h1>
                    <div className="overflow-auto row flex-nowrap">
                        {store.planets && store.planets.length > 0 ? store.planets.map((planet) => (<PlanetsCard
                            key={planet.uid} entities={planet} entity="planets" addFavorites={actions.addFavorites} />)) : ""}
                    </div>
                </div>
                <div>
                <h1 className="text-danger my-4">Starships</h1>
                    <div className="overflow-auto row flex-nowrap">
                        {store.starships && store.starships.length > 0 ? store.starships.map((starships) => (<StarShipsCard
                            key={starships.uid} entities={starships} entity="starships" addFavorites={actions.addFavorites} />)) : ""}
                    </div>
                </div>
                <div>
                <h1 className="text-danger my-4">Vehicles</h1>
                    <div className="overflow-auto row flex-nowrap">
                        {store.vehicles && store.vehicles.length > 0 ? store.vehicles.map((vehicles) => (<VehiclesCard
                            key={vehicles.uid} entities={vehicles} entity="vehicles" addFavorites={actions.addFavorites} />)) : ""}
                    </div>
                </div>
                <div>
                <h1 className="text-danger my-4">Species</h1>
                    <div className="overflow-auto row flex-nowrap">
                        {store.species && store.species.length > 0 ? store.species.map((species) => (<SpeciesCard
                            key={species.uid} entities={species} entity="species" addFavorites={actions.addFavorites} />)) : ""}
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};
