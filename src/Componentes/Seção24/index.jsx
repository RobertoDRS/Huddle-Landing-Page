import React from "react";
import './style.css';


export default function Seção24(props){
    return(
        <section id="seção-2-4">
            <div id="div-principal-seção-2-4">
                
                <div id="div-textos-seção-2-4">
                    <h2>{props.titulo}</h2>
                    <p>{props.paragrafo}</p>
                </div>
                
                <div className={props.imagem}></div>
            </div>
        </section>
    );
}