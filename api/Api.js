import jsonp from 'jsonp';

import Genres from './Genres';

const baseURL = 'https://api.themoviedb.org/3/';

export default {
    getUpcomingMovies: function(callback, language = 'en-US', page = 1) {
        var apiURL = `${baseURL}movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=${language}&page=${page}`;

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
    },
    getMovies: function(options, callback) {
        var apiURL = `${baseURL}discover/movie?api_key=${process.env.TMDB_API_KEY}`;

        Object.keys(options).forEach((option) => {
            var val = options[option];

            apiURL += `&${option}=${val}`;
        });

        jsonp(apiURL, (err, data) => {
            if (err) {
                console.error(err);
                return false;
            }

            callback(data);
        });
    },
    getMovieInfo: function(movieId, callback) {
        var apiURL = `${baseURL}movie/${movieId}?api_key=${process.env.TMDB_API_KEY}&language=en-US`;

        jsonp(apiURL, (err, data) => {
            if (err) {
                console.error(err);
                return false;
            }

            callback(data);
        });
    }
}
