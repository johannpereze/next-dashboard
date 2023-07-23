import { PokemonGrid } from "./components/PokemonGrid";
import { PokemonsResponse } from "./interfaces/pokemons-response";
import { SimplePokemon } from "./interfaces/simple-pokemon";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/")[6],
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons List <small>Static</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
