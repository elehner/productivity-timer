import React, { useState } from "react";
import "./App.css";
import Timer from "../Timer";

export const App: React.FC = () => {
  const [pomodoroSettings, setPomodoroSettings] = useState({});

  console.log(Date.now());
  return (
    <div className="App">
      <Timer intialSeconds={25} handleTimeout={() => console.log(Date.now())} />
    </div>
  );
};
