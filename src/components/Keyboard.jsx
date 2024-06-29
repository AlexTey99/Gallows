import React, { useEffect, useState } from "react";

const Keyboard = () => {
    const [keyboard, setKeyboard] = useState([]);

    useEffect(() => {
        const divsKeyboard = [];
        for (let i = 0; i <= 25; i++) {
            const letter = String.fromCharCode(97 + i);
            divsKeyboard.push(<div className="keyboardDivs" key={i}>{letter}</div>);
        }
        setKeyboard(divsKeyboard);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Dependencia vacía para ejecutarse solo una vez al montar el componente

    return (
        <div className="keyboard">
            {keyboard}
        </div>
    );
};

export { Keyboard };

