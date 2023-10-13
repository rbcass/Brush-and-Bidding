import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Account from './pages/Account/Account'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

     
      <Router>
      <Navbar />
      <Routes>
        <Route path='/'  Component={Home}/>
        <Route path='/Account' Component={Account}/>
      </Routes>
      </Router>

    </div>
  );
}

export default App;
