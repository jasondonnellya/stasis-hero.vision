import Head from './head/_';

function App() {
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
