import useInput from "../Input/useInput";
import Input from "../Input/Input";
import Button from "../Button/Button";

import styles from "./OneInputForm.module.css";

function OneInputForm(props) {
  const { value, valid, inputProps } = useInput(props.inputParams);

  const submitHandler = (event) => {
    event.preventDefault();
    props.clickHandler(value);
  };

  return (
    <form className={styles.form}>
      <Input
        id={`oif${props.id}`}
        label={props.label}
        className={styles.input}
        errorMessage={props.errorMessage}
        {...inputProps}
      />
      <Button
        className={styles.button}
        onClick={submitHandler}
        disabled={valid ? undefined : true}
      >
        {props.buttonText}
      </Button>
    </form>
  );
}

export default OneInputForm;
