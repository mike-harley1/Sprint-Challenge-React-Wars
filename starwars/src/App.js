    
import React, { useState } from 'react';
import './App.css';
import DataCall from './components/DataCall'
import CharCards from './components/CharCards'
import styled from 'styled-components'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [charList, setCharList] = useState([])
  console.log(charList)
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 const Header = styled.h1`
  font-size: 120px;
  background: green;
  
  color:blue;
 
  
`
  const Cards = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  `;

  return (
    <div className="App">
      <Header className="Header">React Wars</Header>
      {/* Component DataCall allows to tap into API and acquire data to be used and this is stored in useState */}
      <DataCall data={setCharList} />
      {/* Component cards is styled component to apply some additional styles */}
      <Cards>
        {/* charList is updated from DataPull and it is passed into map() to render component 'CharCard' to generate card for each of the characters */}
        {charList.map((item, index) => {
          return <CharCards
            key={index}
            Id={index}
            CharacterName={item.name}
            CharacterHeight={item.height}
            CharacterEyeColor={item.eye_color}
            CharacterGender={item.gender}
            homeworld={item.homeworld}
          />
        })}
      </Cards>
    </div>
  );
}

export default App;
