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

function App() {
  useEffect(() => {
    const login = async () => {
      const data = await axios.post(window.API_URL + '/login',
        {
          data: {
            name: 'Jason',
            traits: ''
          }
        }
      )
      console.log(data)
    }
    login()
  }, [])
  return (
    <div className="App">
      <Head />
      <header className="App-header">
      </header>
      <Container className="is-hidden-mobile">
        <Logo/>
      </Container>
      <Container className="is-hidden-desktop is-hidden-tablet">
        <NotSupported />
      </Container>
    </div>
  );
}

export default App;
