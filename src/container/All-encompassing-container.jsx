import { useState } from "react";
import { PokemonApi } from "../component-API/Api-pokemon";
import { DivContainerToFill } from "../components/Div-containerToFill";
import { Header } from "../components/Header";
//@ts-ignore
import { Keyboard } from "../components/Keyboard";


const AllEncompassingContainer = () => {

    const [guessedLetters, setGuessedLetters] = useState([]);

    const handleLetterClick = (letter) => {
        setGuessedLetters([...guessedLetters, letter]);
    };

    return (
        <div className="all-encompassing-container">
            <Header />
            <PokemonApi />
            <DivContainerToFill guessedLetters={guessedLetters} />
            <Keyboard onLetterClick={handleLetterClick} />
        </div>
    )
}

export {AllEncompassingContainer};