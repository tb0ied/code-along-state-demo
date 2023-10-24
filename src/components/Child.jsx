import { useState } from "react";

// when we want to useState, we have to import it with {}'s'
export default function Child(props) {
  // use state is just a function
  // as an arguments, it takes an initial value for a state variable
  console.log(useState(0));

  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <p>{props.name} is the child</p>
      <img src={props.src} onClick={handleLikes}></img>
      <span>❤️{likes}</span>
    </div>
  );
}
