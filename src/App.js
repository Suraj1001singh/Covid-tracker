import "./App.css";

import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { fetchData } from "./api"; //this immediately search for the index file
import coronaImage from "./images/image-1.png";

function App() {
  const [state, setstate] = useState({ data: {}, country: "" });
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchData();
      setstate({ data: data });
      // setstate(data);
    };
    fetchAPI();
  }, []);
  // console.log("App", state);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setstate({ data: fetchedData, country: country });
    // console.log(fetchAPI);
  };
  // console.log(state.country);
  // console.log(state.data);
  return (
    <div className={styles.container}>
      <img src={coronaImage} className={styles.image} alt="COVID-19"></img>
      <Cards data={state.data}></Cards>
      <CountryPicker handleCountryChange={handleCountryChange}></CountryPicker>
      <Charts data={state.data} country={state.country}></Charts>
    </div>
  );
}

export default App;

// installing:
// npm install --save chart.js          for running react-chartjs-2
// npm install --save axios react-chartjs-2 reactcountup classnames
// npm install --save @material-ui/core
