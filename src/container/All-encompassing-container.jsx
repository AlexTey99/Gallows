import { PokemonApi } from "../component-API/Api-pokemon";
import { Header } from "../components/Header";


const AllEncompassingContainer = () => {
    return (
        <div className="all-encompassing-container">
            <Header/>
            <PokemonApi/>
        </div>
    )
}

export {AllEncompassingContainer};