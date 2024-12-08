import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { LoremIpsum } from 'react-lorem-ipsum';

export const Planets = (props) => {
    const { store, actions } = useContext(Context);

useEffect (() => {
    fetch(`https://www.swapi.tech/api/planets/${props.entities.uid}`)
    .then((response) => response.json())
    },[props.entities]);
   
	return (
        <div className="container">
            <div className="d-flex flex-row my-2">
                <div>
                    <img className="card-img" style={{ width: "30rem", height: "auto" }} src={`https://starwars-visualguide.com/assets/img/planets/${props.entities.uid}.jpg`} onError={(e)=> e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'} alt="Card image cap"/>
                </div>
                <div className="text-center m-auto text-center text-white mr-3">
                    <h5>{props.entities.properties.name}</h5>
                    <p><LoremIpsum p={1} /></p>
                </div>
            </div>
                <div className="border-top border-danger my-3 d-flex justify-content-between text-center">
                    <div>
                        <p className="text-danger"><strong>name</strong></p>
                        <p className="text-danger">{props.entities.properties.name}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Climate</strong></p>
                        <p className="text-danger">{props.entities.properties.climate}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Population</strong></p>
                        <p className="text-danger">{props.entities.properties.population}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Orbital Period</strong></p>
                        <p className="text-danger">{props.entities.properties.orbital_period}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Rotation Period</strong></p>
                        <p className="text-danger">{props.entities.properties.rotation_period}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Diameter</strong></p>
                        <p className="text-danger">{props.entities.properties.diameter}</p>
                    </div>
                </div>
      </div>
	);
};
