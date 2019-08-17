import React from 'react'
import styled from 'styled-components'



export default function CharCards(props) {
    const Card = styled.div`
    background:red;
    color: white;
    margin: 10px;
    font-size:40px;
    padding: 5px;
    border-radius: 10px;
    border: 2px black solid;
    `;
    
    const CharHead = styled.div`
    font-size: 5rem;
    font-style:italic;
    `;

    return (
        // Card is styled component and taps into props passed and renders them on the screen
        <Card className="character-card">
            <CharHead>{props.CharacterName}</CharHead>
            <p>Id:{props.Id}</p>
            <p>Height: {props.CharacterHeight}</p>
            <p>Eye Color: {props.CharacterEyeColor}</p>
            <p>Gender: {props.CharacterGender}</p>
            <p className="homeworld">Home World:{props.homeworld}</p>
        </Card>

    )
}