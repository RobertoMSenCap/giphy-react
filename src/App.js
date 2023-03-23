import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import Random from './pages/Random';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <section className="App-content">
          <Navbar />
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/random' element={<Random />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
