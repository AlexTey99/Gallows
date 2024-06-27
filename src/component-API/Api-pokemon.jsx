import { useEffect, useState } from "react"

const PokemonApi = () => {
    const [pokemon, setPokemon] = useState([]);
    const [firstWordTitle, setFirstWordTitle] = useState('');// Palabra de tittulo
    const [letterCounter, setLetterCounter] = useState(0);
    

    // Fetch que retorna un título aleatorio
    useEffect(() => {
        fetch('https://api.jikan.moe/v4/anime?q=pokemon&sfw')
            .then(res => res.json())
            .then(res => {
                setPokemon(res.data[0].titles);
                let RandomNumber = Math.floor(Math.random() * res.data[0].titles.length);
                let pokemonRandomIndex = res.data[0].titles[RandomNumber];
                let titlePokemon = pokemonRandomIndex.title;
                setFirstWordTitle(titlePokemon.trim().split(' ')[0]);

                // Iterar sobre cada carácter de la palabra
                // for (let i = 0; i < firstWordTitle.length; i++) {
                //     setLetterCounter(incremento => incremento +1);
                // }
            })
            .catch(error => console.error('Error al realizar la solicitud', error))
    }, [])

    useEffect(() => {
        if (firstWordTitle) {
            setLetterCounter(firstWordTitle.length);
        }
        console.log(firstWordTitle);
        console.log(letterCounter);
    }, [firstWordTitle]);
}

export { PokemonApi }