import React, { useState, useContext,useEffect } from "react";
import { Context } from "../store/appContext";
import { LoremIpsum } from 'react-lorem-ipsum';

export const Characters = (props) => {
    const { store, actions } = useContext(Context);

useEffect (() => {
    fetch(`https://www.swapi.tech/api/people/${props.entities.uid}`)
    .then((response) => response.json())
    },[props.entities]);

    
	return (
        <div className="container">
            <div className="d-flex flex-row my-2">
                <div>
                <img className="card-img" style={{ width: "30rem" }} src={`https://starwars-visualguide.com/assets/img/characters/${props.entities.uid}.jpg`} alt="Card image cap"/>
                </div>
                <div className="text-center m-auto text-white mr-2">
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
                        <p className="text-danger"><strong>Birth year</strong></p>
                        <p className="text-danger">{props.entities.properties.birth_year}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Gender</strong></p>
                        <p className="text-danger">{props.entities.properties.gender}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Height</strong></p>
                        <p className="text-danger">{props.entities.properties.height}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Skin Color</strong></p>
                        <p className="text-danger">{props.entities.properties.skin_color}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Eye Color</strong></p>
                        <p className="text-danger">{props.entities.properties.eye_color}</p>
                    </div>
                </div>
      </div>
	);
};
