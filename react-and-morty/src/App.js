import React, {useState} from "react";
import "./App.css";
import logo from "./img/Rick_and_Morty_Logo_and_Image.png"
import Characters from "./components/characters";
import Locations from "./components/locations";
import Description from "./components/description";



function App() {
  
    // const characters =  useCharacters(1);
    //console.log("Characters data: ");
    //console.log(characters);

    // const locations =  useLocations(1);
    //console.log("Locations data: ");
    //console.log(locations);

  const [page, setPage] = useState("desc");
 
  return (
    <>
        <img className="logo" src={logo} alt="Logo" />
        <div className="divContainer">
         
          {page === "desc" && <Description />}

          <div className="button">
            <button onClick={() => setPage("char")}>Characters</button>
            <button onClick={() => setPage("loc")}>Locations</button>
          </div>
          
          {page === "char" && <Characters />}
          {page === "loc" && <Locations />}

        </div>
    </>
  )
  ;
}

export default App;
