import { useEffect } from 'react'
import './sass/site.scss';

import Head from './head/_';
import axios from 'axios';

import Logo from './components/Logo/_';
import Container from './components/Container/_';
import Splash from './components/Splash/_';
import UserUpdate from './components/User/_Update';
import Home from './components/Home/_';
import Game from './components/Game/_';

import NotSupported from './components/NotSupported/_';
import Maintenance from './components/Maintenance/_';

function App() {
  useEffect(() => {
    /**
     * ! find a good way to stop useEffect from rendering twice!!!! (it's creating multiple users)
     */
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
      console.log(data)
    }
    login()
  }, [])
  const maintenance = true;
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
            <Logo/>
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
