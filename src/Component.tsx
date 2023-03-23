import { useEffect, useState } from 'react';
import './Component.css';

export const Component = () => {
  useEffect(() => {
    if (counter === 5) {
      setDisabled(true);
    }
  });
  const [counter, setCounter] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [resetDisabled, setResetDisabled] = useState<boolean>(true);
  let handleClick = () => {
    setResetDisabled(false);
    if (counter < 5) {
      setCounter(counter + 1);
    }
  };
  return (
    <div className="component">
      <div className="wrapper">
        <div className="windowWrapper">
          <div
            className="counter"
            style={{ color: counter === 5 ? 'red' : '' }}
          >
            {counter}
          </div>
        </div>
        <div className="buttons">
          <button
            disabled={disabled}
            onClick={() => {
              setCounter(counter + 1);
              handleClick();
            }}
          >
            inc
          </button>
          <button
            disabled={resetDisabled}
            onClick={() => {
              setCounter(0);
              setResetDisabled(true);
              setDisabled(false);
            }}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};
