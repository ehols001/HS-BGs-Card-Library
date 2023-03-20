import React, { useState } from "react";

function Library() {

  /*
  *
  * Retreiving and storing hero and minion data from the database.
  * 
  */ 

  const [heroData, setHeroData] = React.useState(null);
  const [minionData, setMinionData] = React.useState(null);
  const [tier1Data, setTier1Data] = React.useState(null);
  const [tier2Data, setTier2Data] = React.useState(null);
  const [tier3Data, setTier3Data] = React.useState(null);
  const [tier4Data, setTier4Data] = React.useState(null);
  const [tier5Data, setTier5Data] = React.useState(null);
  const [tier6Data, setTier6Data] = React.useState(null);

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

  React.useEffect(() => {
    fetch("/tier-1")
      .then((res) => res.json())
      .then((tier1Data) => setTier1Data(tier1Data));
  }, []);

  React.useEffect(() => {
    fetch("/tier-2")
      .then((res) => res.json())
      .then((tier2Data) => setTier2Data(tier2Data));
  }, []);

  React.useEffect(() => {
    fetch("/tier-3")
      .then((res) => res.json())
      .then((tier3Data) => setTier3Data(tier3Data));
  }, []);

  React.useEffect(() => {
    fetch("/tier-4")
      .then((res) => res.json())
      .then((tier4Data) => setTier4Data(tier4Data));
  }, []);

  React.useEffect(() => {
    fetch("/tier-5")
      .then((res) => res.json())
      .then((tier5Data) => setTier5Data(tier5Data));
  }, []);

  React.useEffect(() => {
    fetch("/tier-6")
      .then((res) => res.json())
      .then((tier6Data) => setTier6Data(tier6Data));
  }, []);

  /*
  *
  * Mapping and hero and minion data to display.
  * 
  */ 

  const [heroes, setHeroes] = useState([]);
  const [minions, setMinions] = useState([]);
  const [tier1Minions, setTier1Minions] = React.useState(null);
  const [tier2Minions, setTier2Minions] = React.useState(null);
  const [tier3Minions, setTier3Minions] = React.useState(null);
  const [tier4Minions, setTier4Minions] = React.useState(null);
  const [tier5Minions, setTier5Minions] = React.useState(null);
  const [tier6Minions, setTier6Minions] = React.useState(null);

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

  React.useEffect(() => {
    if(tier1Data) {
      setTier1Minions(
        tier1Data.map((minion) => {
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
  }, [tier1Data]);

  React.useEffect(() => {
    if(tier2Data) {
      setTier2Minions(
        tier2Data.map((minion) => {
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
  }, [tier2Data]);

  React.useEffect(() => {
    if(tier3Data) {
      setTier3Minions(
        tier3Data.map((minion) => {
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
  }, [tier3Data]);

  React.useEffect(() => {
    if(tier4Data) {
      setTier4Minions(
        tier4Data.map((minion) => {
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
  }, [tier4Data]);

  React.useEffect(() => {
    if(tier5Data) {
      setTier5Minions(
        tier5Data.map((minion) => {
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
  }, [tier5Data]);

  React.useEffect(() => {
    if(tier6Data) {
      setTier6Minions(
        tier6Data.map((minion) => {
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
  }, [tier6Data]);

  return (
    <div className="container-fluid">
      <h3>~~~~~~~~~~ Heroes ~~~~~~~~~~</h3>
      <div className="row text-white card-section">
        {heroes}
      </div>
      <h3>~~~~~~~~~~ Tavern Tier 1 ~~~~~~~~~~</h3>
      <div className="row text-white card-section">
        {tier1Minions}
      </div>
      <h3>~~~~~~~~~~ Tavern Tier 2 ~~~~~~~~~~</h3>
      <div className="row text-white card-section">
        {tier2Minions}
      </div>
      <h3>~~~~~~~~~~ Tavern Tier 3 ~~~~~~~~~~</h3>
      <div className="row text-white card-section">
        {tier3Minions}
      </div>
      <h3>~~~~~~~~~~ Tavern Tier 4 ~~~~~~~~~~</h3>
      <div className="row text-white card-section">
        {tier4Minions}
      </div>
      <h3>~~~~~~~~~~ Tavern Tier 5 ~~~~~~~~~~</h3>
      <div className="row text-white card-section">
        {tier5Minions}
      </div>
      <h3>~~~~~~~~~~ Tavern Tier 6 ~~~~~~~~~~</h3>
      <div className="row text-white card-section">
        {tier6Minions}
      </div>
    </div>
  );
}

export default Library;
