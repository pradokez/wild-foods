import React from 'react';
import './App.css'

function App() {
  return (
    <div class="input-group mb-3 custom-width">
      <input
        type="text"
        class="form-control"
        placeholder="Search Recipe"
        aria-label="input search"
        aria-describedby="button-addon2"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Button
      </button>
    </div>
  );
}

export default App;
