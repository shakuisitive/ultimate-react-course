import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  let { cities, isLoading } = useCities();
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
