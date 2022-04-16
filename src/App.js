import { useEffect } from 'react'

import Head from './head/_';
import axios from 'axios';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(window.API_URL + '/api')
      console.log(data)
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <Head />
      <header className="App-header">
        { process.env.NODE_ENV }
      </header>
    </div>
  );
}

export default App;
