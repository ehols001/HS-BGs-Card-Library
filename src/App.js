import React from 'react';
import Controls from './Controls.js';
import Library from './Library.js';

function App() {

    const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
      fetch("/non-hero-cards")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  
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

        <Controls />
        <Library cardData={data}/>

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