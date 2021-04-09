import { Router } from 'express';
import axios from 'axios';

const pokemonRoutes = Router();


pokemonRoutes.get("/", async (req, res) => {

  const pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')

  // DB

  return res.json(pokemons.data)
})

export { pokemonRoutes }