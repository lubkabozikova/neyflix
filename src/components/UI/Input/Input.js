import { useEffect, useState } from "react";
import styles from "./Input.module.css";

function Input(props) {
  // const testRegex = props.testRegex || /\.*/;

  // const [value, setValue] = useState("");
  // const valid = testRegex.test(value);
  // const [wasActive, setWasActive] = useState(false);
  // const [focused, setFocused] = useState(false);

  // const showError = !valid && wasActive && !focused;
  // const moveLabel = focused || !!value;

  // const valueChangeHandler = (event) => setValue(event.target.value);

  // const blurHandler = () => {
  //   setFocused(false);
  //   if (!wasActive) setWasActive(true);
  // };

  const inputClass = props.showError ? styles.error : undefined;
  const labelClass = props.moveLabel ? styles.focused : undefined;

  return (
    <div className={`${styles.input} ${props.className}`}>
      <input
        id={`input${props.id}`}
        type={props.type}
        className={inputClass}
        value={props.value}
        onBlur={props.blurHandler}
        onFocus={props.focusHandler}
        onChange={props.valueChangeHandler}
        // onBlur={blurHandler}
        // onFocus={() => setFocused(true)}
        // value={value}
        // onChange={valueChangeHandler}
      />
      <label htmlFor={`input${props.id}`} className={labelClass}>
        {props.label}
      </label>
      {props.showError && (
        <div className={styles.errorText}>{props.errorMessage}</div>
      )}
    </div>
  );
}

export default Input;
