import { useParams, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  let [searchParams, setSearchParams] = useSearchParams();
  let lat = searchParams.get("lat");
  let lng = searchParams.get("lng");
  console.log(searchParams);
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h2>
        Positions: {lat}, {lng}
      </h2>
      <button
        onClick={() => {
          setSearchParams({ lat: 1, lng: 2 });
        }}
      >
        change position
      </button>
    </div>
  );
}

export default Map;
