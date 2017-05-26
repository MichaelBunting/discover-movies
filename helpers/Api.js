import jsonp from 'jsonp';

import Genres from './Genres';

const baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '32afd7888473b024d2024908ce0df8c4';

export default {
    getUpcomingMovies: function(callback, language = 'en-US', page = 1) {
        var apiURL = `${baseURL}movie/upcoming/?api_key=${apiKey}&language=${language}&page=${page}`;

        jsonp(apiURL, (err, res) => {
            if (err) {
                console.error(err);
            } else {
                callback(res);
            }
        });
    },
    getGenres: function(genreId) {
        return Genres[genreId];
    }
}
