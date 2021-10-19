import React from 'react';
import './Card.scss';
export const Card =(props)=>{
    const {url, name, gender, status} = props;
    return(
        <div class="card">
        <img class="card-img-top" src={url} alt=""></img>
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">Gender:{gender}</p>
            <p class="card-text">Status:{status}</p>
            <a href="http://localhost:3000" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    );
};