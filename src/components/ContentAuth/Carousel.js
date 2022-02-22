import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Carousel.module.css";

function Carousel(props) {
  const [items, setItems] = useState([...props.items]);

  useEffect(() => {
    const movingPictures = setInterval(
      () =>
        setItems((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        }),
      3000
    );
    return () => clearInterval(movingPictures);
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.container}>
        {items.map((item) => (
          <div className={styles.item} key={item.id}>
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
