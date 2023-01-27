import "./App.css";
import Navbar from "../Components/Navbar";
import CountryTitle from "../Components/CountryTitle";
import Position from "../Components/Position";
import Form from "../Components/Form";
import { useState, useEffect } from "react";
import { fetchCountry, fetchUk, fetchPostcode } from "../api";

function App() {
  const [country, setCountry] = useState("UK");
  const [data, setData] = useState(null);
  const [postcode, setPostcode] = useState("");
  const [tempPostcode, setTempPostcode] = useState("");
  const [localSearch, setLocalSearch] = useState(false);
  const [invalidReq, setInvalidReq] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (country === "UK") {
      setIsLoading(true);
      fetchUk()
        .then((res) => {
          setData(res);
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (country !== "search" && country !== "UK") {
      setIsLoading(true);
      fetchCountry(country)
        .then((res) => {
          setData(res);
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (country === "search") {
      setIsLoading(true);
      fetchPostcode(postcode)
        .then((res) => {
          if (res === undefined) {
            setInvalidReq(true);
          } else {
            setData(res);
            setInvalidReq(false);
          }
        })
        .then(() => {
          setIsLoading(false);
        });
    }
  }, [country, postcode]);

  if (isLoading) {
    return (
      <div className="App">
        <Navbar setCountry={setCountry} />
        <p>Loading...⏳</p>
      </div>
    );
  }
  if (country === "search" && localSearch === false) {
    return (
      <div className="App">
        <Navbar setCountry={setCountry} />
        <br />
        <Form
          tempPostcode={tempPostcode}
          setTempPostcode={setTempPostcode}
          setPostcode={setPostcode}
          setLocalSearch={setLocalSearch}
        />
      </div>
    );
  }
  if (
    country === "search" &&
    localSearch === true &&
    invalidReq === false &&
    isLoading === false
  ) {
    return (
      <div className="App">
        <Navbar setCountry={setCountry} />
        <br />
        <Form
          tempPostcode={tempPostcode}
          setTempPostcode={setTempPostcode}
          setPostcode={setPostcode}
          setLocalSearch={setLocalSearch}
        />
        <h1>{postcode}</h1>
        <div className="searchResult">
          <table>
            {data &&
              data.map((obj, index) => {
                return (
                  <Position fuel={obj.fuel} perc={obj.perc} place={index + 1} />
                );
              })}
          </table>
        </div>
      </div>
    );
  }
  if (
    country === "search" &&
    localSearch === true &&
    invalidReq === true &&
    isLoading === false
  ) {
    return (
      <div className="App">
        <Navbar setCountry={setCountry} />
        <br />
        <Form
          tempPostcode={tempPostcode}
          setTempPostcode={setTempPostcode}
          setPostcode={setPostcode}
          setLocalSearch={setLocalSearch}
        />
        <h1>{postcode}</h1>
        <div className="badSearchResult">
          <p>Sorry, this postcode doesn't seem to have any results.</p>
          <p>Please enter a valid postcode (e.g. SP4 7DE)</p>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <Navbar setCountry={setCountry} />
      <CountryTitle country={country} />
      <div className="Fuels">
        <table>
          {data &&
            data.map((obj, index) => {
              return (
                <Position fuel={obj.fuel} perc={obj.perc} place={index + 1} />
              );
            })}
        </table>
      </div>
      <a
        href="https://carbon-intensity.github.io/api-definitions/#carbon-intensity-api-v2-0-0"
        target="_blank"
        rel="noreferrer"
      >
        <p id="footnote">Powered by the National Grid API </p>
      </a>
      <a href="https://github.com/Harrison365" target="_blank" rel="noreferrer">
        <p id="made-by">Made by Harrison365 </p>
      </a>
    </div>
  );
}

export default App;
