import "./App.css";

import DiceRolls from "./DiceRolls";
import RandomPokemon from "./RandomPokemon";

export default function App() {
  return (
    <div className="App">
      <RandomPokemon />
      <DiceRolls />
    </div>
  );
}