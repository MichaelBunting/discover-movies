import jsonp from 'jsonp';

import Genres from './Genres';

const baseURL = 'https://api.themoviedb.org/3/';

export default {
    getUpcomingMovies: function(callback, language = 'en-US', page = 1) {
        var apiURL = `${baseURL}movie/upcoming/?api_key=${process.env.TMDB_API_KEY}&language=${language}&page=${page}`;

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
    },
    getVideo: function(movieID, callback) {
        var apiURL = `${baseURL}movie/${movieID}/videos?api_key=${process.env.TMDB_API_KEY}`;

        jsonp(apiURL, (err, data) => {
            if (err) {
                console.error(err);
                return false;
            }

            var len = data.results.length - 1;

            callback(data.results[len]);
        });
    }
}