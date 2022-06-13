import React, {useState} from 'react';

const Character = (props) => {
    
    const [style, setStyle] = useState("card-desc");
  
    const showCardDesc =() => {  
        setStyle("card-desc-show");
    };
    const doNotShowCardDesc =() => {  
        setStyle("card-desc");
    };
      
    

    const { name, image, species, status, gender, origin } = props;
    return <>
        <div key={name} className="card">
            <div className="card-title">
                <h5>{name}, {species}</h5>
            </div>
            <img className="charImg" src={image} onClick={showCardDesc} alt="Character"></img>
            <div className={style} onClick={doNotShowCardDesc}>
                <p className='charName'>{name}</p>
                <p className='charInfo'><b>Species:</b> {species}</p>
                <p className='charInfo'><b>Gender:</b> {gender};</p>
                <p className='charInfo'><b>Status:</b> {status};</p>
                <p className='charInfo'><b>Origin:</b> {origin};</p>
                
            </div>
        </div>
    </>;
};

export default Character
