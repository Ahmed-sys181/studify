import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Housing from './pages/Housing';
import Transport from './pages/Transport';
import StudentDeals from './pages/StudentDeals';
import Marketplace from './pages/Marketplace';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/deals" element={<StudentDeals />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </Router>
  );
}

export default App;
