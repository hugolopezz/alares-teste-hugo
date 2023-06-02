import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from './pages/home';
import PlansDashboard from './pages/PlansDashboard';
import OrdersDashboard from './pages/OrdersDashboard';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plansDashboard" element={<PlansDashboard />} />
          <Route path="/ordersDashboard" element={<OrdersDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
