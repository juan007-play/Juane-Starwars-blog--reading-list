import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const StarShipsCard = (props) => {
    const { store, actions } = useContext(Context);
    const [starShipsInformation, setStarShipsInformation] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/starships/${props.entities.uid}`)
            .then((response) => response.json())
            .then((data) => setStarShipsInformation(data.result))
            .catch((error) => console.error("Error fetching starship data:", error));
    }, [props.entities]);

    return (
        <div className="card p-0 m-3" style={{ width: "17rem" }}>
            <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/starships/${props.entities.uid}.jpg`} onError={(e) => e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'} height={270} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.entities.name}</h5>
                <div className="container d-flex row">
                    <div>
                        {starShipsInformation ? (
                            <div>
                                <p className="m-0">Model: {starShipsInformation.properties.model}</p>
                                <p className="m-0">Starship class: {starShipsInformation.properties.starship_class}</p>
                            </div>
                        ) : ""}
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <Link to={"/demo/" + props.entity + "/" + props.entities.uid}>
                            <button className="btn btn-outline-primary" data-toggle="button" aria-pressed="false">
                                Learn more!
                            </button>
                        </Link>
                        <button
                            className="btn btn-outline-warning" data-toggle="button" aria-pressed="false"
                            onClick={() => { actions.addFavorites(props.entities.name); }}>
                            <i className={`far fa-heart ${store.favorites.includes(props.entities.name) ? "fas fa-heart" : ""}`}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
