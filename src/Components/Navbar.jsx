import React from "react";
import "./Navbar.css";

const Navbar = ({ setCountry }) => {
  const refreshClick = () => {
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title" onClick={refreshClick}>
        Leccy Source⚡️
      </h1>
      <div className="navbar-images">
        <h2 className="flagText">United Kingdom</h2>
        <img
          src={
            "https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898__480.jpg"
          }
          alt="image1"
          className="navbar-image"
          onClick={() => {
            setCountry("UK");
          }}
        />
        <h2 className="flagText">England</h2>
        <img
          src={
            "https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg"
          }
          alt="image2"
          className="navbar-image"
          onClick={() => {
            setCountry("england");
          }}
        />
        <h2 className="flagText">Scotland</h2>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/800px-Flag_of_Scotland.svg.png"
          }
          alt="image3"
          className="navbar-image"
          onClick={() => {
            setCountry("scotland");
          }}
        />
        <h2 className="flagText">Wales</h2>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Wales_%281959%29.svg/2560px-Flag_of_Wales_%281959%29.svg.png"
          }
          alt="image3"
          className="navbar-image"
          onClick={() => {
            setCountry("wales");
          }}
        />
        <h2 className="flagText">Search</h2>
        <img
          src={
            "https://png.pngitem.com/pimgs/s/107-1073254_magnifying-glass-print-clipart-pink-background-transparent-transparent.png"
          }
          alt="image4"
          className="navbar-image"
          id="search"
          onClick={() => {
            setCountry("search");
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
