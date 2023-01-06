import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HookFlow from './pages/hookFlow';
import NavBar from './components/navbar';
import UseReducerRun from './pages/useReducerRun';

function App() {
  return (
    <div className='mx-4 mt-2'>
      <Router>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/" element={<HookFlow />} />
            <Route path="/useReducer" element={<UseReducerRun />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
