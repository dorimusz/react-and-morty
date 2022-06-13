import React from "react";
import { useState, useEffect } from "react";
import { useLocations } from "../api/useData";
import Location from "./location";


const Locations = () => {
  const [counter, setCounter] = useState(1);
  const { info, results } = useLocations(counter);
  
  /*
  const [listItems, setListItems] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    console.log("HandleScroll function is running");
    setIsFetching(true);
  }

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  function fetchMoreListItems() {
    console.log("ez már itt fetchMoreListItems...")
    
    setTimeout(() => {
      setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
      setIsFetching(false);
    }, 2000);
  }
  */


  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Locations</h1>

      <div className="cards">
        <div>{results === "Loading... " ? "Loading... " : ""}</div>
        <div className="characterHolder">
          {results &&
            results.map((item) => (
              <Location
                name={item.name}
                type={item.type}
                dimension={item.dimension}
                key={item.name}
              />
            ))}
        </div>
        
       {/* <div>{isFetching && 'Fetching more list items...'}</div> */}

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

export default Locations;
