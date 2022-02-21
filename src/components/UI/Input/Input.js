import styles from "./Input.module.css";

function Input(props) {
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
