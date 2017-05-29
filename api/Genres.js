import jsonp from 'jsonp';

const genres = {};
const baseURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=';

const url = `${baseURL}${process.env.TMDB_API_KEY}`;

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
