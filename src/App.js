import './App.css';
import Topo from './Componentes/Topo';
import SeçãoInicial from './Componentes/SeçãoInicial';
import Seção3 from './Componentes/Seção3';
import Seção24 from './Componentes/Seção24';
import Seção5 from './Componentes/Seção5';
import Rodapé from './Componentes/Rodapé';

function App() {
  return (
    <main>
      <Topo/>

      <SeçãoInicial/>

      <Seção24 idSection="primeira-section-seção-2-4" titulo="Crescer Juntos" paragrafo="Gerar discussões significativas com o seu público e construir uma comunidade forte e leal. Pense nas conversas perspicazes que lhe faltam com um formulário de feedback." imagem="imagem-seção-2"/>
      <Seção3/>

      <Seção24 idSection="segunda-section-seção-2-4" titulo="Os seus Utilizadores" paragrafo="Não leva tempo nenhum a integrar o Huddle com a solução de autenticação da sua aplicação. Isto significa que, uma vez iniciada a sessão na sua aplicação, os seus utilizadores podem começar a conversar imediatamente." imagem="imagem-seção-4"/>

      <Seção5/>

      <Rodapé/>
    </main>
  );
}

export default App;
