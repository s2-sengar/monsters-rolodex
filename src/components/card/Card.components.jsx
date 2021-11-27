import React from "react";
import './Card.styles.css';

export const Card=({name,email,id})=>{
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster-img"/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}