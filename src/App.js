// import React, { Component } from 'react';
import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
import PokeCard from "./components/PokeCard";
import pokes from "./pokes.json";

const App = () => (
  <div>
  <Wrapper>
    <Title>Click-a-Pokémon</Title>
    <PokeCard
      name={pokes[0].name}
      image={pokes[0].image}
    />
    <PokeCard
      name={pokes[1].name}
      image={pokes[1].image}
    />
    <PokeCard
      name={pokes[2].name}
      image={pokes[2].image}
    />
     <PokeCard
      name={pokes[3].name}
      image={pokes[3].image}
    />
    <PokeCard
      name={pokes[4].name}
      image={pokes[4].image}
    />
    <PokeCard
      name={pokes[5].name}
      image={pokes[5].image}
    />
    <PokeCard
      name={pokes[6].name}
      image={pokes[6].image}
    />
     <PokeCard
      name={pokes[7].name}
      image={pokes[7].image}
    />
     <PokeCard
      name={pokes[8].name}
      image={pokes[8].image}
    />
    <PokeCard
      name={pokes[9].name}
      image={pokes[9].image}
    />
    <PokeCard
      name={pokes[10].name}
      image={pokes[10].image}
    />
    <PokeCard
      name={pokes[11].name}
      image={pokes[11].image}
    />
  </Wrapper>
  <Footer backgroundImage={pokes[12].image}>
  <h1>&nbsp;</h1>
  <h1>&nbsp;</h1>
  </Footer>
  </div>
);


export default App;
