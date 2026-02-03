import { useState } from "react";
import "./App.css";
import CharacterCard from "/components/CharacterCard/CharacterCard.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import characters from "../components/data/characters";

const App = () => {
  const [characterList] = useState(characters);

  return (
    <div className="main-container">
      {characterList.map((char) => (
        <CharacterCard
          key={char.id}
          title={char.title}
          name={char.name}
          age={char.age}
          job={char.job}
          img={char.img}
        />
      ))}
    </div>
  );
};

export default App;