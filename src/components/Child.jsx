import { useState } from "react";
import chu from "../assets/chu.png";
import ho from "../assets/ho.jpg";
import horn from "../assets/horn.jpg";

// when we want to useState, we have to import it with {}'s'
export default function Child({ name }) {
  // use state is just a function
  // as an arguments, it takes an initial value for a state variable
  console.log(useState(0));

  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <p>{name} is the child</p>
      <img src={chu} onClick={handleLikes}></img>
      <span>❤️{likes}</span>
      <p>{name} is the child</p>
      <img src={ho} onClick={handleLikes}></img>
      <span>❤️{likes}</span>
      <p>{name} is the child</p>
      <img src={horn} onClick={handleLikes}></img>
      <span>❤️{likes}</span>
    </div>
  );
}
