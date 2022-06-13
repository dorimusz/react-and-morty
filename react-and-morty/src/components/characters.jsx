import React, { useState} from "react";
import { useCharacters } from "../api/useData";
import Character from "./character";
import Pagination from "./pagination";

const Characters = () => {

  
  const [pageNum, setPageNum] = useState();
  // const [counter, setCounter] = useState(pageNum);
  // console.log(counter);
  const { info, results } = useCharacters(pageNum);
  //console.log(pageNum);

  // const handleClick1 = () => {
  //   setCounter(counter + 1);
  // };

  // const handleClick2 = () => {
  //   setCounter(counter - 1);
  // };


  return (
    <>
      <h1>Characters</h1>

      <div className="cards">
        {results === "Loading... " ? "Loading... " : ""}
        <div className="characterHolder">
          {results &&
            results.map((item) => (
              <Character
                name={item.name}
                image={item.image}
                species={item.species}
                status={item.status}
                gender={item.gender}
                origin={item.origin.name}
                key={item.name}
              />
            ))}
        </div>
      </div>
      {/* <div className="count">
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
      </div> */}

      <Pagination info={info} pageNum={pageNum} setPageNum={setPageNum} />

    </>
  );
};

export default Characters;

/*
  (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0:
created: "2017-11-04T18:48:46.250Z"
episode: (51) ['https://rickandmortyapi.com/api/episode/1']
gender: "Male"
id: 1
image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
location: {name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3'}
name: "Rick Sanchez"
origin: {name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1'}
species: "Human"
status: "Alive"
type: ""
url: "https://rickandmortyapi.com/api/character/1"
*/
