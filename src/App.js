import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HookFlow from './pages/hookFlow';
import NavBar from './components/navbar';
import UseReducerRun from './pages/useReducerRun';
import UseLayoutEffect from './pages/useLayoutEffect';
import UseDebugValue from './pages/useDebugValue';
import UseImperativeHandle from './pages/useImperativeHandle';
import ContextModule from './pages/ContextModule/contextModule';
import CompoundComponents from './pages/CompoundComponents/compoundComponents';
import MyGlobe from './pages/MyGlobe';

function App() {
  return (
    <div className="mx-4 mt-2">
      <Router>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/" element={<HookFlow />} />
            <Route path="/useReducer" element={<UseReducerRun />} />
            <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
            <Route path="/useDebugValue" element={<UseDebugValue />} />
            <Route path="/useImperativeHandle" element={<UseImperativeHandle />} />
            <Route path="/contextModule" element={<ContextModule />} />
            <Route path="/compoundComponents" element={<CompoundComponents />} />
            <Route path="/myGlobe" element={<MyGlobe />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
