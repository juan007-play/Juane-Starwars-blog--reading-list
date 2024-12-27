import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { LoremIpsum } from "react-lorem-ipsum";

export const Vehicles = (props) => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${props.entities.uid}`)
            .then((response) => response.json())
    }, [props.entities]);

    return (
        <div className="container">
            <div className="d-flex flex-row my-2">
                <div>
                    <img className="card-img" style={{ width: "30rem", height: "auto" }} src={`https://starwars-visualguide.com/assets/img/vehicules/${props.entities.uid}.jpg`} onError={(e) => e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'} alt="Card image cap" />
                </div>
                <div className="text-center m-auto text-center text-white mr-3">
                    <h5>{props.entities.properties.model}</h5>
                    <p><LoremIpsum p={1} /></p>
                </div>
            </div>
            <div className="border-top border-danger my-3 d-flex justify-content-between text-center">
                <div>
                    <p className="text-danger"><strong>Model</strong></p>
                    <p className="text-danger">{props.entities.properties.model}</p>
                </div>
                <div>
                    <p className="text-danger"><strong>Vehicle class</strong></p>
                    <p className="text-danger">{props.entities.properties.vehicle_class}</p>
                </div>
                <div>
                    <p className="text-danger"><strong>Manufacture</strong></p>
                    <p className="text-danger">{props.entities.properties.manufacture}</p>
                </div>
                <div>
                    <p className="text-danger"><strong>Cost in credits</strong></p>
                    <p className="text-danger">{props.entities.properties.cost_in_credits}</p>
                </div>
                <div>
                    <p className="text-danger"><strong>Length</strong></p>
                    <p className="text-danger">{props.entities.properties.length}</p>
                </div>
                <div>
                    <p className="text-danger"><strong>Crew</strong></p>
                    <p className="text-danger">{props.entities.properties.crew}</p>
                </div>
            </div>
        </div>
    );
};
