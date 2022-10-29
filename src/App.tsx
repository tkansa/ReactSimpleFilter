import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const fruit = ['apple', 'banana', 'orange', 'grapefruit',
    'mango', 'strawberry', 'peach', 'apricot'];

  const [filter, setFilter] = useState('');
  return (
    <div className="App">
      <p>
        Type to filter the list:
        <input id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
      </p>
      <ul>
        <ul>
          {fruit.filter(f => f.includes(filter) || filter === '')
            .map(f => <li key={f}>{f}</li>)}
        </ul>
      </ul>
    </div>
  );
}

export default App;
