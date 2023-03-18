import React, {useState} from "react";

const Pokedex = () => {

    const [currentPokemonsList, setCurrentPokemonsList] = useState<string[]>(["Pikachu", "Ditto", "Metapod"])
    const [currentSelectedPokemon, setCurrentSelectedPokemon] = useState<string>('')

    return (
        <div>
            <h1>Pokedex</h1>
            <h2>Selected Pokémon: {currentSelectedPokemon ? currentSelectedPokemon : "Nenhum pokémon selecionado!"}</h2>

            <h2>All Pokémons: </h2>
            <ul>
                {currentPokemonsList.map((pokemon) => {
                    return (
                    <li>
                        <button onClick={(e) => setCurrentSelectedPokemon(pokemon)}>{pokemon}</button>
                    </li>)
                })}
            </ul>
        </div>
    );
}

export default Pokedex;
