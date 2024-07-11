import React, { useEffect, useState } from "react";

const Keyboard = ({onLetterClick}) => {
    const [keyboard, setKeyboard] = useState([]);

    useEffect(() => {
        const divsKeyboard = [];
        for (let i = 0; i <= 25; i++) {
            const letter = String.fromCharCode(97 + i);
            divsKeyboard.push(<div className="keyboardDivs" onClick={()=> onLetterClick(letter)} key={i}>{letter}</div>);
        }
        setKeyboard(divsKeyboard);
    }, [onLetterClick]);

    return (
        <div className="keyboard">
            {keyboard}
        </div>
    );
};

export { Keyboard };

