import { createContext, useState, useEffect, useContext } from "react";

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

function useCities() {
  let context = useContext(CitiesContext);

  if (!useContext) {
    throw new Error("CityContext was used outside of Cities Provider");
  }

  return context;
}

export { CitiesContext, CitiesProvider, useCities };
