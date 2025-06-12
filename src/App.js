import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CHG1Form from './pages/CHG1Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="text-center mt-20 text-2xl">Welcome to MCA E-Filing Assistant</div>} />
        <Route path="/chg1" element={<CHG1Form />} />
      </Routes>
    </Router>
  );
}

export default App;
