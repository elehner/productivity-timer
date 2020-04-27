import React from "react";
import logo from "../../logo.svg";
import "./App.css";
import { Timer } from "../Timer/Timer";

export const App: React.FC = () => {
  console.log(Date.now());
  return (
    <div className="App">
      <Timer intialSeconds={25} handleTimeout={() => console.log(Date.now())} />
    </div>
  );
};
