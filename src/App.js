import data from './data.js'
import Header from './components/Header.js';
import JournalEntry from './components/JournalEntry.js';
import './App.css';

function App() {
  const info = data.map( entry => {
    return <JournalEntry 
      id={ entry.id }
      entry={ entry }
    />
  })

  return (
    <div className="App">
      <Header />
      <div className="entries-list">
        { info }
      </div>
    </div>
  );
}

export default App;
