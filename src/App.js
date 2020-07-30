import React from 'react';
import styled from 'styled-components';
import Menu from './components/menu/index';
import dadosIniciais from '../src/components/data/dados_iniciais.json';
import BannerMain from '../src/components/BannerMain';
import Carousel from '../src/components/Carousel';
import Footer from '../src/components/Footer';

const AppWrapper = styled.div`
   Background: var(--grayDark);
`;

function App() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain 
        videoTitle= {dadosIniciais.categorias[0].videos[0].titulo}
        url= {dadosIniciais.categorias[0].videos[0].url}
        videoDescription= {"-Nem que seja uma menina por vez-"}
      />

<Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Footer

      />
    </AppWrapper>
  );
}

export default App;
