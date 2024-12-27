import React, {useContext, useState, useEffect} from "react";
import { LoremIpsum } from "react-lorem-ipsum";

export const StartShips = (props) => {


useEffect(() => {
    fetch(`https://www.swapi.tech/api/starships/${props.entities.uid}`)
    .then((responde)=> responde.json())
}, [props.entities])


    return(
        <div className="container">
        <div className="d-flex flex-row my-2">
            <div>
            <img className="card-img" style={{ width: "30rem" }} src="https://via.placeholder.com/800x600" alt="Card image cap"/>
            </div>
            <div className="text-center m-auto text-white mr-2">
                <h5>{props.entities.properties.model}</h5>
                <p><LoremIpsum p={1} /></p>
            </div>
        </div>
            <div className="border-top border-danger my-3 d-flex justify-content-between text-center">
                <div>
                    <p className="text-danger"><strong>Model</strong></p>
                    <p className="text-danger">{props.entities.properties.name}</p>
                </div>
                
            </div>
  </div>

    );
};