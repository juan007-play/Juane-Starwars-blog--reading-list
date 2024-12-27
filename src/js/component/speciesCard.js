import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SpeciesCard = (props) => {
    const { store, actions } = useContext(Context);
    const [speciesInformation, setSpeciesInformation] = useState(null);

    useEffect(() => {
            fetch(`https://www.swapi.tech/api/species/${props.entities.uid}`)
                .then((response) => response.json())
                .then((data) => setSpeciesInformation(data.result))
                .catch((error) => console.error("Error fetching starship data:", error));
        }, [props.entities]);
    

    return (
        <div className="card p-0 m-3" style={{ width: "17rem" }}>
            <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/species/${props.entities.uid}.jpg`} onError={(e) => e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'} height={270} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.entities.name}</h5>
                <div className="container d-flex row">
                    <div className="lh-base">
                        {speciesInformation ? (
                            <div>
                                <p className="m-0">Population: {speciesInformation.properties.classification}</p>
                                <p className="m-0">Terrain: {speciesInformation.properties.designation}</p>
                            </div>) : ""}
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <Link to={"/demo/" + props.entity + "/" + props.entities.uid}>
                            <button className="btn btn-outline-primary" data-toggle="button" aria-pressed="false" >Learn more!</button>
                        </Link>
                        <button className="btn btn-outline-warning " data-toggle="button" aria-pressed="false" onClick={() => { actions.addFavorites(props.entities.name) }}>
                            <i className={`far fa-heart ${store.favorites.includes(props.entities.name) ? 'fas fa-heart' : ''}`} ></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};