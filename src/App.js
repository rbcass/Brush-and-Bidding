import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Account from './pages/Account/Account';
import ProtectedRoute from './components/Protected';
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
        <Route path="/profile/:username" component={Profile} />
      </Routes>
      </Router>

    </div>
  );
}

export default App;
