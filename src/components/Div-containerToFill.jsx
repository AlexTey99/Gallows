import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resizableDiv } from "../Redux/actions";

const DivContainerToFill = ({ guessedLetters }) => {
    const [divs, setDivs] = useState([]);
    const firstWordTitle = useSelector((state) => state.counter.firstWordTitle);
    const dispatch = useDispatch();

    function reducirDiv() {
        const miDiv = document.getElementById('resizableDiv');
        const nuevaAncho = miDiv.offsetWidth - 18;

        // Aplicar las nuevas dimensiones con una pequeña demora para que se vea la animación
        setTimeout(() => {
            dispatch(resizableDiv(nuevaAncho));
        }, 100);
    }

    useEffect(() => {
        // Pintar los espacios de la palabra al iniciar el juego
        let newDivs = [];
        for (let i = 0; i < firstWordTitle.length; i++) {
            if (firstWordTitle[i] === ' ') {
                newDivs.push(
                    <div className="spaceDiv" key={`${i}-space`} style={{ marginRight: '5px' }}>
                        {/* Espacio visual */}
                    </div>
                );
            } else {
                newDivs.push(
                    <div className="separateDivs" key={i}>
                        {/* Aquí puedes agregar contenido al div si lo deseas */}
                    </div>
                );
            }
        }
        setDivs(newDivs);
    }, [firstWordTitle]);

    useEffect(() => {
        // Comprobar si la letra presionada se encuentra en la palabra
        if (guessedLetters.length > 0) {
            let newDivs = [];
            for (let i = 0; i < firstWordTitle.length; i++) {
                if (firstWordTitle[i] === ' ') {
                    newDivs.push(
                        <div className="spaceDiv" key={`${i}-space`} style={{ marginRight: '5px' }}>
                            {/* Espacio visual */}
                        </div>
                    );
                } else {
                    newDivs.push(
                        <div className="separateDivs" key={i}>
                            {guessedLetters.includes(firstWordTitle[i]) ? firstWordTitle[i] : ''}
                        </div>
                    );
                }
            }
            setDivs(newDivs);
        }
        if (guessedLetters.length > 0 && !firstWordTitle.includes(guessedLetters[guessedLetters.length - 1])) {
            reducirDiv();
        }
    }, [guessedLetters, firstWordTitle]);

    useEffect(() => {
        // Comprobar si todas las letras han sido adivinadas, ignorando los espacios
        if (firstWordTitle) {
            const lettersOnly = firstWordTitle.replace(/\s/g, '');
            const allLettersGuessed = lettersOnly.split('').every(letter => guessedLetters.includes(letter));
            if (allLettersGuessed) {
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(alert('Lo has conseguido'));
                    }, 1000);
                });
            }
        }
    }, [firstWordTitle, guessedLetters]);

    return (
        <div className="DivContainerToFill">
            {divs}
        </div>
    );
};

export { DivContainerToFill };
