// import { useEffect, useState } from 'react'
import './css/tailwind.css';

import Head from './head/_';
// import axios from 'axios';

import Container from './components/Utils/Container';
import AppBar from './components/AppBar/_';

import Splash from './components/Splash/_';
import Home from './components/Home/_';
import User from './components/User/_';
import UserUpdate from './components/User/Update';
import Game from './components/Game/_';

import NotSupported from './components/Utils/NotSupported';
import Maintenance from './components/Utils/Maintenance';

import { usePage } from './store/page'

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

function App() {
  /*
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    const login = async () => {
      const data = await axios.post(window.API_URL + '/login')
        .then((res) => {
          setLoading(false)
          return res;
        })
      console.log(data);
    }
    if(!loading) {
      setLoading(true)
      login();
    }
  }, [loading])
  */
  const maintenance = false;
  const page = usePage()
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
          <Container className="sm:block hidden">
            <AppBar active={ true } />
            <Splash />
            <Home />
            <User />
            <UserUpdate />
            <Game />
          </Container>
          <Container className="sm:hidden block">
            <NotSupported />
          </Container>
        </>
      }
    </div>
  );
}

export default App;
