import React, { useState } from 'react';

function Controls() {

  const [card, setCard] = useState(null);

  React.useEffect(() => {
    console.log(card);
  }, [card]);

  function handleSubmit(e) {
    e.preventDefault();
    /* console.log(document.getElementById('cardsearch').value);
    fetch("/search-card-by-name", {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'cardsearch': document.getElementById('cardsearch').value}),
    })
      .then((res) => res.json())
      .then((card) => setCard(card)); */
  }
  return (
    <div className="container-fluid">
      {/* Section containing the filter and search options */}
      <div className="row bg-info filter-section">
        {/* Search (form) bar and button */}
        <div className="col searchbar">
          <form className="form-inline" onSubmit={handleSubmit}>
            <label className="sr-only" for="cardsearch">Card Search</label>
            <div className="input-group">
              <input type="search" id="cardsearch" className="form-control searchbar-self" name="cardsearch" placeholder="i.e. Mama Bear" />
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
    </div>
  );
}

  export default Controls;