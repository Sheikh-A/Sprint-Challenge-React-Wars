import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {Container, Row} from 'reactstrap';
import StarInfo from './components/StarInfo.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [world, setWorld] = useState([]);
  useEffect(() => {
    axios.get('https://swapi.co/api/people/?page=9')
        .then(response => {
            console.log(response.data.results);
            setWorld(response.data.results);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
       <Container>
         <Row>
         {world.map((characters) => {
           return (
             <StarInfo
               name={characters.name}
               gender={characters.gender}
               height={characters.height}
               eyes={characters.eye_color}

             />
           )
         })}
         </Row>
       </Container>
    </div>
  );
}

export default App;
