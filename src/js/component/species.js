import React, { useState, useContext, useEffect } from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { Context } from "../store/appContext";

export const Species = (props) => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/species/${props.entities.uid}`)
        .then((responde)=> responde.json())
    }, [props.entities])
    return (
        
        <div className="container">
            <div className="d-flex flex-row my-2">
                <div>
                    <img className="card-img" style={{ width: "30rem" }} src={`https://starwars-visualguide.com/assets/img/species/${props.entities.uid}.jpg`} alt="Card image cap" />
                </div>
                <div className="text-center m-auto text-white mr-2">
                    <h5>{props.entities.properties.classification}</h5>
                    <p><LoremIpsum p={1} /></p>
                </div>
            </div>
            <div className="border-top border-danger my-3 d-flex justify-content-between text-center">
                <div>
                    <p className="text-danger"><strong>Classification</strong></p>
                    <p className="text-danger">{props.entities.properties.classification}</p>
                </div>
                <div>
                    <p className="text-danger"><strong>Designation</strong></p>
                    <p className="text-danger">{props.entities.properties.designation}</p>
                </div>
                <div>
                    <p className="text-danger"><strong>Average height</strong></p>
                    <p className="text-danger">{props.entities.properties.average_height}</p>
                </div>
                <div>
                    <p className="text-danger"><strong>Average lifespan</strong></p>
                    <p className="text-danger">{props.entities.properties.average_lifespan}</p>
                </div>
                <div>
                    <p className="text-danger"><strong>Hair colors</strong></p>
                    <p className="text-danger">{props.entities.properties.hair_colors}</p>
                </div>
                <div>
                    <p className="text-danger"><strong>Skin colors</strong></p>
                    <p className="text-danger">{props.entities.properties.skin_colors}</p>
                </div>
            </div>
        </div>
    );
};