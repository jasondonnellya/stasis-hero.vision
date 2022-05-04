import { useEffect } from 'react'
import './css/tailwind.css';

import Head from './head/_';
import axios from 'axios';

import Container from './components/Utils/Container';
import AppBar from './components/AppBar/_';
import Game from './components/Game/_';

import NotSupported from './components/Utils/NotSupported';
import Maintenance from './components/Utils/Maintenance';

function App() {
  let loading = false;
  useEffect(() => {
    const login = async () => {
      /*
      const data = await axios.post(window.API_URL + '/updateUser',
        {
          data: {
            name: 'Jason',
            traits: ['Honest']
          }
        }
      )
      */
      const data = await axios.post(window.API_URL + '/login')
        .then((res) => {
          loading = false;
          return res;
        })
      console.log(data);
    }
    /**
     * ! find a good way to stop useEffect from rendering twice!!!! (it's creating multiple users)
     */
    if(!loading) {
      loading = true;
      login();
    }
  }, [])
  const maintenance = false;
  return (
    <div className="App">
      <Head />
      <header className="App-header">
      </header>
      {
        maintenance ? 
        <Maintenance />
        :
        <>
          <Container className="is-hidden-mobile">
            <AppBar active={ true } />
            <Game/>
          </Container>
          <Container className="is-hidden-desktop is-hidden-tablet">
            <NotSupported />
          </Container>
        </>
      }
    </div>
  );
}

export default App;
