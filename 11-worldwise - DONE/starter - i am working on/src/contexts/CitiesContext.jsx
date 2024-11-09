import { createContext, useState, useEffect } from "react";

let BASE_URL = "http://localhost:9000/";

let CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);

        await new Promise((r) => setTimeout(r, 1000));
        let response = await fetch(BASE_URL + "cities");
        let data = await response.json();
        setCities(data);
      } catch (e) {
        alert("There was an error fetching data...");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesContext, CitiesProvider };
