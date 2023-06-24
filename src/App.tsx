import { useState, MouseEvent } from "react";
import Navigation from "./components/Navigation";
import Home from "./views/Home";

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const name = "Brian";

  const handleClick = (_: MouseEvent): void => {
    setLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <Navigation isLoggedIn={isLoggedIn} />
      <div>
        <Home name={name} />
      </div>
    </div>
  );
}
