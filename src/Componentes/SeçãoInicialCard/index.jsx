import React from "react";
import './style.css';

export default function SeçãoInicialCard(props){
    return(
        <div className="card-seção-incial">
            <img src={props.imagem} alt={props.alt} />
            <span>{props.numero}</span>
            <p>{props.paragrafo}</p>
        </div>
    );
}