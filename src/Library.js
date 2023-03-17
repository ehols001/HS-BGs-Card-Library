import React, { useState } from "react";

function Library(props) {

  const [heroImages, setHeroImages] = useState([]);
  const [minionImages, setminionImages] = useState([]);

  React.useEffect(() => {
    if(props.heroData) {
      setHeroImages(
        props.heroData.map((heroImage) => {
          return (
            <div key={heroImage.id} className="col-2 text-center">
              <figure className="figure">
                <img src={heroImage.battlegrounds.image} className="figure-img img-fluid" alt="card-display" />
              </figure>
            </div>
          );
        })
      );
    }
  }, [props.heroData]);

  React.useEffect(() => {
    if(props.minionData) {
      setminionImages(
        props.minionData.map((minionImage) => {
          return (
            <div key={minionImage.id} className="col-2 text-center">
              <figure className="figure">
                <img src={minionImage.battlegrounds.image} className="figure-img img-fluid" alt="card-display" />
              </figure>
            </div>
          );
        })
      );
    }
  }, [props.heroData]);

  return (
    <div className="container-fluid">
      <h3>Heroes</h3>
      <div className="row bg-warning text-white card-section">
        {heroImages}
      </div>
      <h3>Tier 1</h3>
      <div className="row bg-warning text-white card-section">
        {minionImages}
      </div>
      <h3>Tier 2</h3>
      <div className="row bg-warning text-white card-section">
        {/* {cardImages} */}
      </div>
      <h3>Tier 3</h3>
      <div className="row bg-warning text-white card-section">
        {/* {cardImages} */}
      </div>
      <h3>Tier 4</h3>
      <div className="row bg-warning text-white card-section">
        {/* {cardImages} */}
      </div>
      <h3>Tier 5</h3>
      <div className="row bg-warning text-white card-section">
        {/* {cardImages} */}
      </div>
      <h3>Tier 6</h3>
      <div className="row bg-warning text-white card-section">
        {/* {cardImages} */}
      </div>
    </div>
  );
}

export default Library;
