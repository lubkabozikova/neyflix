import { useNavigate } from "react-router-dom";
import styles from "./Image.module.css";

function Image(props) {
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.image} ${props.className}`}
      onClick={() => navigate(`/detail/${props.image.id}`)}
    >
      {!!props.image.imgUrl && (
        <img src={props.image.imgUrl} alt="" title={props.image.title} />
      )}
      {!props.image.imgUrl && (
        <div className={styles.alt}>{props.image.title}</div>
      )}
    </div>
  );
}

export default Image;
