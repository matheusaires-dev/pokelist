import React, { useState, useEffect } from 'react';
import axios from "axios";
import './pokemonList.scss'

function PokeList({ searchTerm }) {
    const [pokemonList, setPokemonList] = useState([]);
    //   const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchPokemonList() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
                setPokemonList(response.data.results);
            } catch (error) {
                console.error('Error fetching Pokemon list:', error);
            }
        }

        fetchPokemonList();
        console.log("TESTE")
    }, []);

    const filteredPokemonList = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className=''>
            <h1>Pokémon List</h1>
            <ul>
                {filteredPokemonList.length? filteredPokemonList.map(pokemon => (
                    <li key={pokemon.name}>
                        {pokemon.name}
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)}.png`}
                            alt={`${pokemon.name} image`}
                        />
                    </li>
                )):<li>{`Nenhum Pokemon encontrado para a pesquisa: ${searchTerm}`}</li>}
            </ul>
        </div>
    );
}

export default PokeList;
