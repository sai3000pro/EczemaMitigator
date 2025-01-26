import { useState, useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() { 
  // Delete if not needed
  const [count, setCount] = useState(0);
  // State to store data from API
  const [data, setData] = useState(null);
  // Fetch data from API

  // Path: backend/controllers/tempController.js
  useEffect(() => {
    axios.get('http://localhost:5005/api/temperature')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  // bulk of the code

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Data from API:</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {data && <div>{JSON.stringify(data)}</div>}
      </div>
    </div>
  );
}

export default App;