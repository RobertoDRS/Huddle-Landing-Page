import React from "react";
import './style.css';

export default function Rodapé(){
    return(
        <footer>
            <div>
                <img src="assets/logo.svg" alt="Logo" />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam architecto recusandae, qui quisquam provident aut, sunt incidunt molestias excepturi facere fugit iusto deleniti, blanditiis ipsum atque commodi natus ut!
                </p>

                <div><img src="assets/icon-phone.svg" alt="icone-telefone" /> <p>Telefone: (11)22222-5555</p></div>
                <div><img src="assets/icon-email.svg" alt="icone-email" /> <p>Exemplo@huddle.com</p></div>

                <div>
                    <a href="#"><img src="assets/icone-facebook.png" alt="icone-facebook" /></a>
                    <a href="#"><img src="assets/instagram.png" alt="icone-instagram" /></a>
                    <a href="#"><img src="assets/twitter.png" alt="icone-twitter" /></a>
                </div>
            </div>
            <div>
                <h3>BOLETIM DE NOTÍCIAS</h3>
                <p>Para receber dicas sobre como fazer crescer a sua comunidade, inscreva-se no nosso boletim de notícias semanal. Nunca lhe enviaremos spam nem lhe transmitiremos o seu endereço de correio electrónico</p>
                
                <form action="">
                    <input type="email" name="" id="" />
                    <button type="submit">Inscreva-se</button>
                </form>
            </div>
        </footer>
    );
}