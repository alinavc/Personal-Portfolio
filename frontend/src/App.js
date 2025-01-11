import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './components/navbar';
import {Layout} from './siteLayout';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Layout />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
