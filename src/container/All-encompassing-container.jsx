import { useState } from "react";
import { PokemonApi } from "../component-API/Api-pokemon";
import { DivContainerToFill } from "../components/Div-containerToFill";
import { Header } from "../components/Header";
import { Keyboard } from "../components/Keyboard";
import { useSelector} from "react-redux";

const AllEncompassingContainer = () => {
    const [guessedLetters, setGuessedLetters] = useState([]);
    const firstWordTitle = useSelector((state) => state.counter.firstWordTitle);
    console.log(firstWordTitle);

    const handleLetterClick = (letter) => {
        setGuessedLetters([...guessedLetters, letter]);
    };

    return (
        <div className="all-encompassing-container">
            <Header />
            <PokemonApi/>
            <DivContainerToFill guessedLetters={guessedLetters} />
            <Keyboard 
                onLetterClick={handleLetterClick} 
                guessedLetters={guessedLetters} 
                firstWordTitle={firstWordTitle} 
            />
        </div>
    )
}

export { AllEncompassingContainer };
