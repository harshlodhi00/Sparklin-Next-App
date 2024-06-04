"use client";

import { useEffect, useState } from "react";

const PokimonDetail = ({ params }) => {
  const [pokemon, setPokemon] = useState(null);

  const { pokimonDetail } = params;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokimonDetail}/`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">
        {pokemon.name.toUpperCase()}
      </h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-40 h-40 mx-auto mb-4"
      />
      <div className="text-lg">
        <p>
          <span className="font-semibold">Height:</span> {pokemon.height}
        </p>
        <p>
          <span className="font-semibold">Weight:</span> {pokemon.weight}
        </p>
        <div className="mt-4">
          <p className="font-semibold">Abilities:</p>
          <ul className="list-disc list-inside">
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Types:</p>
          <ul className="list-disc list-inside">
            {pokemon.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Stats:</p>
          <ul className="list-disc list-inside">
            {pokemon.stats.map((stat, index) => (
              <li key={index}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokimonDetail;
