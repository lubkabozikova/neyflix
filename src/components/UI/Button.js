import styles from "./Button.module.css";

function Button(props) {
  const { className, children, ...otherProps } = props;
  return (
    <button className={`${styles.button} ${className}`} {...otherProps}>
      {props.children}
    </button>
  );
}

export default Button;
