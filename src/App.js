import React from "react";
import './App.css';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/non-hero-cards")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  var cardImages = data.map((cardImage, index) => {
    return (
      <div key={index} className="col-2 text-center">
        <figure className="figure">
          <img src={cardImage.battlegrounds.image} className="figure-img img-fluid" alt="card-display" />
        </figure>
      </div>
    );
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container-fluid">

      {/* Section containing the page description */}
      <div className="row justify-content-center bg-dark text-white header-section">
        <div className="col-4 text-center">
          <div className="headers">
            <h2>Hearthstone</h2>
            <h1>Battlegrounds</h1>
          </div>
        </div>
      </div>

      {/* Section containing the filter and search options */}
      <div className="row bg-info filter-section">
        {/* Search (form) bar and button */}
        <div className="col searchbar">
          <form className="form-inline" action="/search-card-by-name" method="POST" onSubmit={handleSubmit}>
            <label className="sr-only" for="cardsearch">Card Search</label>
            <div className="input-group">
              <input type="search" className="form-control searchbar-self" name="cardsearch" placeholder="i.e. Mama Bear" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <button type="submit" className="btn-btn-success searchbtn" aria-label="Submit button for search input">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Section containing the card display */}
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

      {/* JavaScript used for Bootstrap */}
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
