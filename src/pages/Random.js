import '../App.css';
import getRandomGif from '../services/getRandomGif';
import Image from '../components/Image/Image'
import { useState, useEffect } from 'react';

const Random = () => {
  const [gif, setGif] = useState({});

  useEffect(() => {
    getRandomGif().then(gif => setGif(gif))
  },[]);

  return (
    <div className="App">
      <section className="App-content">
        <h1>{gif.title === "" ? "sinTitulo" : gif.title}</h1>
        <Image src={gif.url}/>
      </section>
    </div>
  );
}

export default Random;
