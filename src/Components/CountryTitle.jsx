import React from "react";
import "./CountryTitle.css";

export default function CountryTitle({ country }) {
  if (country === "UK") {
    return <h1>United Kingdom 🇬🇧</h1>;
  }
  if (country === "england") {
    return <h1>England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</h1>;
  }
  if (country === "scotland") {
    return <h1>Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿</h1>;
  }
  if (country === "wales") {
    return <h1>Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿</h1>;
  }
}
