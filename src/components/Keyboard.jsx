import React, { useEffect, useState } from "react";

const Keyboard = ({ onLetterClick, guessedLetters, firstWordTitle }) => {
    const [keyboard, setKeyboard] = useState([]);

    useEffect(() => {
        const divsKeyboard = [];
        for (let i = 0; i <= 25; i++) {
            const letter = String.fromCharCode(97 + i);
            const divId = `keyboardDiv_${letter}`; // Generar un id único para cada div
            const isInWord = firstWordTitle.includes(letter);
            const isGuessed = guessedLetters.includes(letter);
            const isIncorrect = isGuessed && !isInWord;

            divsKeyboard.push(
                <div
                    id={divId} // Asignar el id generado al div
                    className={`keyboardDivs ${isIncorrect ? 'incorrectKey' : ''}`}
                    onClick={() => onLetterClick(letter)}
                    key={letter} // Usar la letra como key única
                >
                    {letter}
                </div>
            );
        }
        setKeyboard(divsKeyboard);
    }, [onLetterClick, guessedLetters, firstWordTitle]);

    return (
        <div className="containerkeyboard">
            <div className="keyboard">
                {keyboard}
            </div>
        </div>
        
    );
};

export { Keyboard };





