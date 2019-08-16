    
import React, { useEffect } from 'react';
import axios from 'axios';

export default function DataCall(props) {
    
    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)

            .then(response => { 
                console.log(response)
                props.data(response.data.results);
                  
            })

            .catch(error => console.log('You Know You Done Messed Up: ', error))
    },[])


    return (
        <div></div>
    )
}
