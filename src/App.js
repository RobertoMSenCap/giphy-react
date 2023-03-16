import { useEffect, useState } from 'react';
import './App.css';
import Image from './components/Image/Image';
import getGifs from './services/getGifs';

const App = () => {
  const [gifs, setGifs] = useState([]);

  // Sin dependencias (En el primer render)
  useEffect(() => {
    getGifs().then(gifs => setGifs(gifs));
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((gif) => (
          <Image key={gif} src={gif} />
        ))}
      </section>
    </div>
  );
}

export default App;
