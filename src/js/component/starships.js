import React, {useContext, useState} from "react";
import { Context } from "../store/appContext";
import { LoremIpsum } from "react-lorem-ipsum";

export const StartShips = (props) => {
    const { store, actions } = useContext(Context);

    return(
        <div className="container">
        <div className="d-flex flex-row">
            <div>
            <img className="card-img" style={{ width: "30rem" }} src="https://via.placeholder.com/800x600" alt="Card image cap"/>
            </div>
            <div className="text-center m-auto">
                <h5>{props.entities.properties.name}</h5>
                <p><LoremIpsum p={1} /></p>
            </div>
        </div>
            <div className="border-top border-danger my-3 d-flex justify-content-between text-center">
                <div>
                    <p className="text-danger"><strong>Model</strong></p>
                    <p className="text-danger">{props.entities.properties.model}</p>
                </div>
                
            </div>
  </div>

    );
};