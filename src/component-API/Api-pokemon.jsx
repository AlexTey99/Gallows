// src/component-API/Api-pokemon.jsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLetterCounter, setFirstWordTitle } from "../Redux/actions";

const PokemonApi = () => {
    const [pokemon, setPokemon] = useState([]);
    const dispatch = useDispatch();

    // Fetch que retorna un título aleatorio
    useEffect(() => {
        fetch('https://api.jikan.moe/v4/anime?q=pokemon&sfw')
            .then(res => res.json())
            .then(res => {
                setPokemon(res.data[0].titles);
                let RandomNumber = Math.floor(Math.random() * res.data[0].titles.length);
                let pokemonRandomIndex = res.data[0].titles[RandomNumber];
                let titlePokemon = pokemonRandomIndex.title;
                let firstWordTitle = titlePokemon.trim().split(' ')[0];
                let endResult = firstWordTitle;
                dispatch(setFirstWordTitle(endResult));
                dispatch(setLetterCounter(firstWordTitle.length));
            })
            .catch(error => console.error('Error al realizar la solicitud', error));
    }, [dispatch]);

    return null;
};

export { PokemonApi };