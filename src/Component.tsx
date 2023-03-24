import { useState } from "react";
import "./Component.css";

type ButtonItem = {
  type: string;
  func: () => void;
  text: string;
};

type ButtonsDisabledResultType = {
  [key: string]: boolean;
};

export const Component = () => {
  const [counter, setCounter] = useState<number>(0);
  const [maxValue] = useState<number>(5);

  const setButtonsDisabled = (type: string) => {
    const result: ButtonsDisabledResultType = {
      INC_BUTTON: counter === maxValue,
      RESET_BUTTON: counter === 0,
    };
    return result[type];
  };

  const arrButtons = [
    { text: "inc", type: "INC_BUTTON", func: () => setCounter(counter + 1) },
    { text: "reset", type: "RESET_BUTTON", func: () => setCounter(0) },
  ];

  return (
    <div className="extraWrapper">
      <div className="wrapper">
        <div className="windowWrapper">
          <p style={{ color: setButtonsDisabled("INC_BUTTON") ? "red" : "" }}>
            {counter}
          </p>
        </div>
        <div className="buttons">
          {arrButtons.map((el: ButtonItem, index: number) => {
            const { text, type, func } = el;
            return (
              <button
                key={index}
                onClick={func}
                disabled={setButtonsDisabled(type)}
              >
                {text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
