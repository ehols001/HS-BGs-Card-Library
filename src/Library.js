import React, { useState } from "react";

function Library(props) {

  const [cardImages, setCardImages] = useState(null);

  React.useEffect(() => {
    if(props.cardData) {
      setCardImages(props.cardData.map((cardImage, index) => {
        return (
          <div key={cardImage.id} className="col-2 text-center">
            <figure className="figure">
              <img src={cardImage.battlegrounds.image} className="figure-img img-fluid" alt="card-display" />
            </figure>
          </div>
        );
      }));
    }
  }, [props.cardData]);

  return (
    <div className="container-fluid">
      <h3>Tier 1</h3>
      <div className="row bg-warning text-white card-section">
        {cardImages}
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
