import { useState } from "react";
import sunIcon from "../assets/icon-sun.svg";
import moonIcon from "../assets/icon-moon.svg";
import logo from "../assets/logo.png";

export const Aside = () => {
  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!mode);
    console.log(mode);
    return mode;
  };

  return (
    <aside>
      <nav>
        <img src={logo} alt="" />
        <ul class="options">
          <li>
            <img
              onClick={handleMode}
              src={mode == true ? sunIcon : moonIcon}
              class="mode"
              alt="hola"
            />
          </li>
          <li>
            <img
              src="https://api.dicebear.com/5.x/bottts/svg?seed=Scooter&radius=50"
              class="avatar"
              alt="avatar"
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
};
