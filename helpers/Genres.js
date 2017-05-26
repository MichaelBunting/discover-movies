import jsonp from 'jsonp';

const genres = {};
const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=32afd7888473b024d2024908ce0df8c4&language=en-US';

jsonp(url, (err, res) => {
    if (err) {
        console.error(err);
    } else {
        res.genres.forEach((genre) => {
            genres[genre.id] = genre.name;
        });
    }
});

export default genres;
