import React from "react";
import { useState, useEffect } from "react";
import { useLocations } from "../api/useData";
import Location from "./location";

const newData = [];
const LocationsScroll = () => {
  const [counter, setCounter] = useState(1);
  const [items, setItems] = useState([]);
  const { info, results } = useLocations(counter);

  setTimeout(() => {
    if (results && results !== undefined && items.length < 19) {
      Object.assign({}, results);
      setItems((items) => [...items, ...results]);
      console.log("results =", results);
      console.log("typeof results =", typeof results);
      /* setItems(...items, results); */
      console.log("items =", items);
      console.log("typeof items =", typeof items);
    }
  }, 1000);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  const LoadMoreData = () => {
    setTimeout(() => {}, 2000);
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      LoadMoreData();
    }
  };

  useEffect(() => {
    LoadMoreData();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <h1>Locations</h1>

      <div className="cards">
        <div>{items.length < 1 ? "Loading... " : ""}</div>
        <div className="characterHolder">
          {items &&
            items.map((item) => (
              <Location
                name={item.name}
                type={item.type}
                dimension={item.dimension}
                key={item.name}
              />
            ))}
        </div>

        <div className="count">
          {counter >= 2 ? (
            <button className="counterBtn" onClick={handleClick2}>
              Previous
            </button>
          ) : (
            <button className="counterBtn">No way back!</button>
          )}
          {counter}
          {info && info.next === null ? (
            <button className="counterBtn">No future!</button>
          ) : (
            <button className="counterBtn" onClick={handleClick1}>
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default LocationsScroll;
