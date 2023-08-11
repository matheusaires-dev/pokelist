import Error from "./Pages/Error";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from "./components/PokemonList";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/PokeList" element={<PokemonList />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
