import React from "react";
import './style.css';


export default function Seção24(props){
    return(
        <section>
            <div>
                <h2>{props.titulo}</h2>
                <p>{props.paragrafo}</p>
            </div>
            
            <div></div>
        </section>
    );
}