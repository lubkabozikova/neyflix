import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

function Carousel(props) {
  const [items, setItems] = useState([...props.items]);

  useEffect(
    () =>
      setInterval(
        () =>
          setItems((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first];
          }),
        3000
      ),
    []
  );

  return (
    <div className={styles.carousel}>
      <div className={styles.container}>
        {items.map((item) => (
          <div className={styles.item} key={item.id}>
            <img
              src={item.imgUrl}
              alt={item.title}
              title={item.title}
              onClick={() => props.clickHandler(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
