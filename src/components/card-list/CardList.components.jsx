import React from "react";
import './CardList.styles.css';
import { Card } from "../card/Card.components";


export const CardList=({monsters})=>{
    return(
        <div className="card-list">
            {
                monsters.map((monster)=>{
                    return(
                        <Card key={monster.id} name={monster.name} email={monster.email} id={monster.id}/>
                    )
                })
            }
        </div>
    )
}