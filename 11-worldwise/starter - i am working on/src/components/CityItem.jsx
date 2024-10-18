import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link className={styles.cityItem} to={`${id}`}>
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>{formatDate(city.date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;

// import { Link } from "react-router-dom";
// import { useCities } from "../contexts/CitiesContext";
// import styles from "./CityItem.module.css";

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   }).format(new Date(date));

// function CityItem({ city }) {
//   const { currentCity, deleteCity } = useCities();
//   const { cityName, emoji, date, id, position } = city;

//   function handleClick(e) {
//     e.preventDefault();
//     deleteCity(id);
//   }

//   return (
//     <li>
//       <Link
//         className={`${styles.cityItem} ${
//           id === currentCity.id ? styles["cityItem--active"] : ""
//         }`}
//         to={`${id}?lat=${position.lat}&lng=${position.lng}`}
//       >
//         <span className={styles.emoji}>{emoji}</span>
//         <h3 className={styles.name}>{cityName}</h3>
//         <time className={styles.date}>({formatDate(date)})</time>
//         <button className={styles.deleteBtn} onClick={handleClick}>
//           &times;
//         </button>
//       </Link>
//     </li>
//   );
// }

// export default CityItem;
