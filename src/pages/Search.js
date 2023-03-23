import { useEffect, useState } from 'react';
import '../App.css';
import Button from '../components/Button/Button';
import Image from '../components/Image/Image';
import Input from '../components/Input/Input';
import getGifs from '../services/getGifs';

const Search = () => {
  const [gifs, setGifs] = useState([]);
  const [inputGif, setInputGif] = useState('');

  useEffect(() => {
    getGifs().then(gifs => setGifs(gifs));
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    getGifs(inputGif).then(gifs => setGifs(gifs));
  }

  const onChangeInput = (e) => {
    setInputGif(e.target.value);
  }

  return (
    <div className="App">
      <section className="App-content">
        <form onSubmit={handleSubmit}>
          <Input onChange={(e) => onChangeInput(e)} value={inputGif} type="text"></Input>
          <Button type="submit">Click Me</Button>
        </form>

        {gifs.map((gif) => (
          <div key={gif.id} className='App-gif'>
            <p>{gif.title}</p>
            <Image src={gif.url} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Search;
