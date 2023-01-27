import React from "react";

export default function ({
  tempPostcode,
  setTempPostcode,
  setPostcode,
  setLocalSearch,
}) {
  return (
    <div>
      {" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          Post Code:{" "}
          <input
            type="text"
            value={tempPostcode}
            onChange={(e) => {
              setTempPostcode(e.target.value);
            }}
          />
        </label>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setPostcode(tempPostcode);
            setLocalSearch(true);
          }}
        >
          Enter
        </button>
        <button
          type="button"
          onClick={() => {
            setTempPostcode("");
            setPostcode("");
            setLocalSearch(false);
          }}
        >
          Clear
        </button>
      </form>
    </div>
  );
}
