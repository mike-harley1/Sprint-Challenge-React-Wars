    
import React, { useEffect } from 'react';
import axios from 'axios';

export default function DataCall(props) {
    
    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => { props.data(response.data.results) })
            .catch(error => console.log('Unexpected Error: ', error))
    }, [])


    return (
        <div></div>
    )
}
