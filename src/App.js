import './index.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <div>
<Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
   <Route path='/pokemon' element={<Pokemon/>}/>
  </Routes>
</Router>
    </div>
  );
}

export default App;
