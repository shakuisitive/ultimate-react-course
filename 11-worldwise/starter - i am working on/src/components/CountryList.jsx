import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  let countriesAdded = [];
  let countries = [];

  for (let i = 0; i < cities.length; i++) {
    if (countriesAdded.includes(cities[i]["country"])) {
      continue;
    }
    countriesAdded.push(cities[i]["country"]);
    countries.push(cities[i]);
  }

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
