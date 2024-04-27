import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import ProductPage from './pages/ProductPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/productpage" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
