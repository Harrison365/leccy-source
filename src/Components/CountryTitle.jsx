import React from "react";
import "./CountryTitle.css";

export default function CountryTitle({ country }) {
  if (country === "UK") {
    return <h1 className="country-title">United Kingdom 🇬🇧</h1>;
  }
  if (country === "england") {
    return <h1 className="country-title">England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</h1>;
  }
  if (country === "scotland") {
    return <h1 className="country-title">Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿</h1>;
  }
  if (country === "wales") {
    return <h1 className="country-title">Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿</h1>;
  }
}
