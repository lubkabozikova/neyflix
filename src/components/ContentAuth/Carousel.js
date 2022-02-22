import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Carousel.module.css";

function Carousel(props) {
  const copiedItems = props.items.map((item) => ({
    ...item,
    key: item.id + "2",
  }));
  const [items, setItems] = useState([...props.items, ...copiedItems]);

  const [addMoving, setAddMoving] = useState(false);
  useEffect(() => {
    const movingPictures = setInterval(() => {
      setAddMoving(true);
      setTimeout(() => {
        setItems((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        setAddMoving(false);
      }, 300);
    }, 3000);
    return () => clearInterval(movingPictures);
  }, []);

  const containerClasses = `${styles.container} ${addMoving && styles.moving}`;

  return (
    <div className={styles.carousel}>
      <div className={containerClasses}>
        {items.map((item) => (
          <div className={styles.item} key={item.key}>
            <Link to={`/detail/${item.id}`}>
              <img src={item.imgUrl} alt={item.title} title={item.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
