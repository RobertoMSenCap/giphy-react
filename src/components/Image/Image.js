import './Image.css';

const Image = ({ src }) => {
    return (
        <img src={src} className="gif-image" alt="titles" />
    )
}

export default Image;