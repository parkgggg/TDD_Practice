import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  //주석 처리한 건 내가 짠 코드 (같은 원리로 돌아간다)

  /*const handleClick = (e) => {
    //엘리먼트 name을 구분해서 분기해준다.
    if (!isDisabled) {
      if (e.target.name === "minus") {
        setCount((count) => count - 1);
      } else {
        setCount((count) => count + 1);
      }
    }
  };

  const handleDisabled = () => {
    if (isDisabled) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };*/

  return (
    <div className="App">
      <header className="App-header">
        {/*}
        <h3 data-testid="counter">{count}</h3>
        <div>
          <button data-testid="minus-button" disabled={isDisabled} name="minus" onClick={handleClick}>
            -
          </button>
          <button data-testid="plus-button" disabled={isDisabled} name="plus" onClick={handleClick}>
            +
          </button>
        </div>
        <div>
          <button
            style={{ backgroundColor: "blue" }}
            data-testid="onoff-button"
            onClick={handleDisabled}
          >
            Click
          </button>
  </div>*/}

        <h3 data-testid="counter">{count}</h3>
        <div>
          <button
            data-testid="minus-button"
            disabled={isDisabled}
            name="minus"
            onClick={() => setCount((prev) => prev - 1)}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            disabled={isDisabled}
            name="plus"
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <div>
          <button
            style={{ backgroundColor: "blue" }}
            data-testid="onoff-button"
            onClick={() => setIsDisabled((  qprev) => !prev)}
          >
            Click
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
