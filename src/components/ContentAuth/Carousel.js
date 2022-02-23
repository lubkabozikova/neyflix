import { useEffect, useState } from "react";
import Image from "./Image";
import styles from "./Carousel.module.css";

function Carousel(props) {
  const copiedItems = props.items.map((item) => ({
    ...item,
    key: item.key + "2",
  }));
  const [items, setItems] = useState([...props.items, ...copiedItems]);

  const [addMoving, setAddMoving] = useState(false);

  useEffect(() => {
    let timer = null;
    const movingPictures = setInterval(() => {
      setAddMoving(true);
      timer = setTimeout(() => {
        setItems((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        setAddMoving(false);
      }, 300);
    }, 3000);
    return () => {
      clearInterval(movingPictures);
      clearTimeout(timer);
    };
  }, []);

  const containerClasses = `${styles.container} ${addMoving && styles.moving}`;

  return (
    <div className={styles.carousel}>
      <div className={containerClasses}>
        {items.map((item) => (
          <Image image={item} key={item.key} className={styles.item} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
