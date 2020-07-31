import React from 'react';
import dadosIniciais from './data/dados_iniciais.json';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        url={dadosIniciais.categorias[0].videos.shift().url}
      />

      {
        dadosIniciais.categorias.map(categoria => <Carousel category={categoria} />)

      }
      <Carousel
        category={dadosIniciais.categorias[0]}
      />

      <Footer />
    </div>
  );
}

export default App;
