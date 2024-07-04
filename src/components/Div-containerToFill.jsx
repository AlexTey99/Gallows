import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";



const DivContainerToFill = ({guessedLetters})=> {
    const [divs, setDivs] = useState([]);
    const firstWordTitle = useSelector((state) => state.counter.firstWordTitle);

    
    useEffect(()=> {
        let newDivs = [];
        for (let i = 0; i < firstWordTitle.length; i++) {
            newDivs.push(<div className="separateDivs" key={i}>
                    {guessedLetters.includes(firstWordTitle[i]) ? firstWordTitle[i] : " "}
            </div>)
               
        }
        setDivs(newDivs)
    },[firstWordTitle, guessedLetters])

    useEffect(() => {
        // Comprobar si todas las letras han sido adivinadas
        if (firstWordTitle) {
            const allLettersGuessed = firstWordTitle.split('').every(letter => guessedLetters.includes(letter));
            if (allLettersGuessed) {
                new Promise((resolve)=> {
                    setTimeout(()=>{
                        resolve(alert('Lo has conseguido'));
                    },1000)
                })  
            }
        }
    }, [firstWordTitle, guessedLetters]);

    
    return(
        <div className="DivContainerToFill">
            {divs}
        </div>
    )
}

export {DivContainerToFill}