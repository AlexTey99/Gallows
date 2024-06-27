
import React from 'react';
import { AllEncompassingContainer } from './All-encompassing-container';
import image from '../image/55629444-alfabeto-alfabeto-inglés-letras-dibujo-en-blanco-y-negro-fondo-blanco.jpg';



const MainContainer = () => {

    return (
        <div className="mainContainer">
            <img src= {image}/>
            <AllEncompassingContainer/>
        </div>
       
    )
};

export { MainContainer };











