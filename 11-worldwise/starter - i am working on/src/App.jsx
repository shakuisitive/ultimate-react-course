// imports from libraries
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing pages
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

// importing components
import PageNav from "./components/PageNav";
import CityList from "./components/CityList";
import { useEffect } from "react";
import CountryList from "./components/CountryList";

// STARTING OUR APPLICATION!

let BASE_URL = "http://localhost:9000/";

function App() {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList isLoading={isLoading} cities={cities} />}
          />
          <Route
            path="cities"
            element={<CityList isLoading={isLoading} cities={cities} />}
          />
          <Route
            path="countries"
            element={<CountryList isLoading={isLoading} cities={cities} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
