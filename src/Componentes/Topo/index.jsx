import React from "react";
import './style.css';

export default function Topo(){
    return (
        <header>
            <div className="limita-largura">
                <img className="logo" src="assets/logo.svg" alt="Logo" />
                <a href="#">Experimente grátis</a>
            </div>
        </header>
    );
}