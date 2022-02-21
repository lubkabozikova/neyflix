import { useState } from "react";

function useInput(params) {
  const testRegex = params.testRegex || /\.*/;
  const initValue = params.initValue || "";

  const [value, setValue] = useState(initValue);
  const valid = testRegex.test(value);

  const [wasActive, setWasActive] = useState(false);
  const [focused, setFocused] = useState(false);

  const showError = !valid && wasActive && !focused;
  const moveLabel = focused || !!value;

  const valueChangeHandler = (event) => setValue(event.target.value);

  const resetHandler = () => {
    setValue("");
    setWasActive(false);
    setFocused(false);
  };

  const blurHandler = () => {
    setFocused(false);
    if (!wasActive) setWasActive(true);
  };

  const focusHandler = () => setFocused(true);

  const inputProps = {
    value,
    showError,
    moveLabel,
    valueChangeHandler,
    resetHandler,
    blurHandler,
    focusHandler,
  };

  return {
    value,
    valid,
    inputProps,
  };
}

export default useInput;
