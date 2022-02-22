import styles from "./DetailImage.module.css";

function DetailImage(props) {
  return (
    <div className={`${styles.image} ${props.className}`}>
      <img src={props.imgUrl} alt="" />
      <div className={styles.overlay}> </div>
    </div>
  );
}

export default DetailImage;
