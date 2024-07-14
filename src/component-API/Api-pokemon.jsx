
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLetterCounter, setFirstWordTitle } from "../Redux/actions";

const PokemonApi = () => {
    const dispatch = useDispatch();

    // Fetch que retorna un título en secuencia
    useEffect(() => {
        fetch('https://api.jikan.moe/v4/anime?q=pokemon&sfw')
            .then(res => res.json())
            .then(res => {
                const titles = res.data[0].titles;
                
                // Obtener el índice actual de localStorage o inicializarlo en 0
                let currentIndex = localStorage.getItem('currentIndex');
                if (currentIndex === null) {
                    currentIndex = 0;
                }else if(currentIndex > 6){
                    currentIndex = 0;
                } else {
                    currentIndex = parseInt(currentIndex, 10);
                }

                // Obtener el título correspondiente al índice actual
                const pokemonRandomTitle = titles[currentIndex].title;

                // Incrementar el índice y actualizarlo en localStorage
                currentIndex = (currentIndex + 1) % titles.length;
                localStorage.setItem('currentIndex', currentIndex);

                // Convierte el string en minúscula y le quita los caracteres especiales
                const endResult = pokemonRandomTitle
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")

                dispatch(setFirstWordTitle(endResult));
                dispatch(setLetterCounter(pokemonRandomTitle.length));
            })
            .catch(error => console.error('Error al realizar la solicitud', error));
    }, [dispatch]);

    return null;
}

export { PokemonApi };
