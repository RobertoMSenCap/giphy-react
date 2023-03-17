const apiKEY = 'UQo7FgqdTkjxpO3yLvLwar9VsE8WFDxl';


export default function getGifs(keyword = 'cats') {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`)
        .then(res => res.json())
        .then(response => {
            const { data } = response;
            const gifs = data.map((image) => {
                const { images, title, id } = image;
                const { url } = images.downsized_medium;

                return { title, id, url}
            });

            return gifs;
        })
}