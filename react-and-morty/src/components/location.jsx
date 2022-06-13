import React, {useState} from 'react';
import kapu from "../img/kapu.jpg"


const Location = (props) => {
    
    const [style, setStyle] = useState("card-desc");
  
    const showCardDesc =() => {  
      setStyle("card-desc-show");
    };
    const doNotShowCardDesc =() => {  
        setStyle("card-desc");
      };

    const {name, type, dimension} = props;
    return <div>
        <div key={name} className="card location">
                <img className="location_bg" src={kapu} alt="Logo" onClick={showCardDesc}/>
                <h5 className="charName">{name}</h5>
                <div><b>Type:</b> {type}</div>
                <div className={style} onClick={doNotShowCardDesc}>
                    <p className='charName'>{name}</p>
                    <p className='charInfo'><b>Dimension:</b> {dimension}</p>
                </div>
        </div>
    </div>;
};

export default Location
