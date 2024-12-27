import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const VehiclesCard = (props) => {
    const { store, actions } = useContext(Context);
    const [vehiclesInformation, setVehiclesInformation] = useState(null);

    useEffect (() => {
        fetch(`https://www.swapi.tech/api/vehicles/${props.entities.uid}`)
        .then((response) => response.json())
        .then(response => {setVehiclesInformation(response.result);})
    },[props.entities])

    return(

 <div className="card p-0 m-3" style={{ width: "17rem" }}>
            <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/vehicles/${props.entities.uid}.jpg`} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.entities.model}</h5>
                <div className="container d-flex row">
                <div>
                    {vehiclesInformation ?  (
                        <div>
                            <p className="m-0">Model: {vehiclesInformation.properties.model}</p>
                            <p className="m-0">Vehicle class: {vehiclesInformation.properties.vehicle_class}</p>
                            <p className="m-0">Manufacturer: {vehiclesInformation.properties.manufacturer}</p>
                        </div>): ""}
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <Link to={"/demo/" + props.entity + "/" + props.entities.uid}>
                            <button className="btn btn-outline-primary" data-toggle="button" aria-pressed="false">
                                Learn more!
                            </button>
                        </Link>
                        <button
                            className="btn btn-outline-warning " data-toggle="button" aria-pressed="false"
                            onClick={() => {actions.addFavorites(props.entities.name);}}>
                            <i className={`far fa-heart ${store.favorites.includes(props.entities.name)? "fas fa-heart": ""}`}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};