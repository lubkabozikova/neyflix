import { Fragment } from "react";
import Button from "../UI/Button/Button";
import styles from "./NavButton.module.css";

function NavButton(props) {
  const disable = props.disable || false;
  return (
    <Fragment>
      <a href="#movies">
        <Button
          className={styles.button}
          onClick={props.onClick}
          disabled={disable ? true : undefined}
        >
          {props.children}
        </Button>
      </a>
    </Fragment>
  );
}

export default NavButton;
