import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const DivContainerToFill = ()=> {
    const [divs, setDivs] = useState([]);
    const contador = useSelector((state) => state.counter.contador);
    const firstWordTitle = useSelector((state) => state.counter.firstWordTitle);
    console.log('Contador:', contador);
    console.log('First Word Title:', firstWordTitle);

    let newDivs = [];
    useEffect(()=> {
        for (let i = 0; i < firstWordTitle.length; i++) {
            newDivs.push(<div className="separateDivs" key={i}>00</div>)
        }
        setDivs(newDivs)
    },[firstWordTitle])
    
    return(
        <div className="DivContainerToFill">
            {divs}
        </div>
    )
}

export {DivContainerToFill}