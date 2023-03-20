import React, { useState } from 'react';

function Controls(props) {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container-fluid">
      {/* Section containing the filter and search options */}
      <div className="row filter-section">
        {/* Controls for filtering cards by tier */}
        <div className="col-4 tier-filters">
          {/* {props.Tiers.map((Tier, tier) => {
            return (
              <button
                className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                key={tier}
              >
                {Tier}
              </button>
            );
          })} */}
        </div>
        {/* Search bar and button */}
        <div className="col-4 searchbar">
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