import React from "react";
import './style.css';       
import SeçãoInicialCard from "../SeçãoInicialCard";
import BotãoComeçar from "../BotãoComeçar";

export default function SeçãoInicial(){
    return(
        <section>
            <div>
                <h1>Construa a Comunidade Os Seus Fãs Irão Adorar</h1>
                <p>
                    Huddle reimagina a forma como construímos comunidades. Tem uma voz, mas o seu público também. Crie ligações com os seus utilizadores à medida que se envolve numa discussão genuína.
                </p>
                <BotãoComeçar/>
            </div>

            <div></div>

            <div>
                <SeçãoInicialCard imagem="assets/icon-communities.svg" alt="comunidades" numero="1.4k+" paragrafo="Comunidades formadas"/>
                <SeçãoInicialCard imagem="assets/icon-messages.svg" alt="mensagens" numero="2.7m+" paragrafo="Mensagens enviadas"/>
            </div>
        </section>
    );
}