import Link from "next/link";

async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default async function Home() {
  const { props } = await getData();
  const { pokemons } = props;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Pokémon List</div>
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.name} className="border-b last:border-0">
              <Link
                href={`/server/${pokemon.name}`}
                className="block py-2 px-4 hover:bg-gray-100 transition-colors duration-300"
              >
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
