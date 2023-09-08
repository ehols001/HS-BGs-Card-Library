import React, { useState } from "react";

function Library() {

  /*
  *
  * Retreiving and storing hero and minion data from the database.
  * 
  */ 

  const [heroData, setHeroData] = useState(null);
  const [minionData, setMinionData] = useState(null);

  React.useEffect(() => {
    fetch("/heroes")
      .then((res) => res.json())
      .then((heroData) => setHeroData(heroData));
  }, []);

  React.useEffect(() => {
    fetch("/minions")
      .then((res) => res.json())
      .then((minionData) => setMinionData(minionData));
  }, []);

  /*
  *
  * Mapping and hero and minion data to display.
  * 
  */ 

  const [heroes, setHeroes] = useState([]);
  const [minions, setMinions] = useState([]);

  React.useEffect(() => {
    if(heroData) {
      setHeroes(
        heroData.map((hero) => {
          return (
            <div key={hero.id} className="col-2 text-center hero">
              <figure className="figure">
                <img src={hero.battlegrounds.image} className="figure-img img-fluid" alt="card-display" />
                <p><span className='hero-name'>{hero.name}</span></p>
              </figure>
            </div>
          );
        })
      );
    }
  }, [heroData]);

  React.useEffect(() => {
    if(minionData) {
      setMinions(
        minionData.map((minion) => {
          return (
            <div key={minion.id} className="col-2 text-center">
              <figure className="figure">
                <img src={minion.battlegrounds.image} className="figure-img img-fluid" alt="card-display" />
              </figure>
            </div>
          );
        })
      );
    }
  }, [minionData]);

  return (
    <div className="container-fluid">
      <h3>~~~~~~~~~~ Heroes ~~~~~~~~~~</h3>
      <div className="row text-white card-section">
        {heroes}
      </div>
      <h3>~~~~~~~~~~ Minions ~~~~~~~~~~</h3>
      <div className="row text-white card-section">
        {minions}
      </div>
    </div>
  );
}

export default Library;
