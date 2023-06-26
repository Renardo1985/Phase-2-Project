import React, { useEffect, useState } from "react";


function Home() {
    const [image, setImage] = useState("");

    useEffect(() => {        
    fetch("http://localhost:3001/games")
        .then(r => r.json())
        .then(data => {setImage(data[Math.floor((Math.random()*data.length))].thumbnail)} )
        .catch(e => alert(e.message +" data please start json server"))
    },[])  
    
    if (!image) return <h2>Loading...</h2>;

    return (
        <div className="home">
            <div className="image-container">
          <img className="home-image" src={image} alt="First slide"/>
          </div>
          
            <h2>MMO Games</h2>
            <h3>Flatiron Phase 2 Project</h3>
            
      </div>
    );
}

export default Home;
