import { useEffect, useState } from "react";
import styles from "./Input.module.css";

function useInput(props) {
  const testRegex = props.testRegex || /\.*/;

  const [value, setValue] = useState("");
  const valid = testRegex.test(value);
  const [wasActive, setWasActive] = useState(false);
  const [focused, setFocused] = useState(false);

  const showError = !valid && wasActive && !focused;
  const inputClass = showError ? styles.error : undefined;
  const moveLabel = focused || !!value;
  const labelClass = moveLabel ? styles.focused : undefined;

  const valueChangeHandler = (event) => setValue(event.target.value);

  const blurHandler = () => {
    setFocused(false);
    if (!wasActive) setWasActive(true);
  };

  // const { submit, submitValue } = props;
  // useEffect(() => {
  //   if (submit && valid) {
  //     submitValue({ value, valid });
  //     console.log(value + " submitted");
  //   }
  // }, [submit, valid, submitValue, value]);

  return (
    <div className={`${styles.input} ${props.className}`}>
      <label className={labelClass}>{props.label}</label>
      <input
        className={inputClass}
        onBlur={blurHandler}
        onFocus={() => setFocused(true)}
        value={value}
        onChange={valueChangeHandler}
      />
      {showError && (
        <div className={styles.errorText}>{props.errorMessage}</div>
      )}
    </div>
  );
}

export default useInput;
