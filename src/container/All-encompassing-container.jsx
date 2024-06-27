import { useState } from "react";
import { PokemonApi } from "../component-API/Api-pokemon";
import { DivContainerToFill } from "../components/Div-containerToFill";
import { Header } from "../components/Header";


const AllEncompassingContainer = () => {
    return (
        <div className="all-encompassing-container">
            <Header/>
            <PokemonApi/>
            <DivContainerToFill/>
        </div>
    )
}

export {AllEncompassingContainer};