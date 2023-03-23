const apiKey = 'UQo7FgqdTkjxpO3yLvLwar9VsE8WFDxl';

export default function getRandomGif() {
    return fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`)
        .then(res => res.json())
        .then(response => {
            const { data } = response;
            const { images, title, id } = data;
            const { url } = images.preview_gif;
            return { title, id, url }
            
        })
}