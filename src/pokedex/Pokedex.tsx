import React, {useState} from "react";

const Pokedex = () => {

    const [currentPokemonsList, setCurrentPokemonsList] = useState<string[]>(["Pikachu", "Ditto", "Metapod"])
    const [currentSelectedPokemon, setCurrentSelectedPokemon] = useState<string>('Pikachu')

    return (
        <div>
            <h1>Pokedex</h1>
            <h2>Selected Pokémon: {currentSelectedPokemon}</h2>

            <h2>All Pokémons: </h2>
            <ul>
                {currentPokemonsList.map((pokemon) => {
                    return (
                    <li>
                        <p>{pokemon}</p>
                    </li>)
                })}
            </ul>
        </div>
    );
}

export default Pokedex;
