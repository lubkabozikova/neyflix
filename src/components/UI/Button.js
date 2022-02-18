import styles from "./Button.module.css";

function Button(props) {
  const { className, children, ...newProps } = props;
  return (
    <button className={`${styles.button} ${className}`} {...newProps}>
      {props.children}
    </button>
  );
}

export default Button;
