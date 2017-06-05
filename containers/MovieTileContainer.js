import React from 'react';

import Api from '../api/Api';

import MovieTile from '../components/MovieTile';

class MovieTileContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            genres: [],
        }
    }

    componentDidMount() {
        var currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - 1);

        var date = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

        var options = {
            sort_by: 'popularity.desc',
            page: 1,
            'primary_release_date.gte': date
        };

        Api.getMovies(options, (res) => {
            this.setState({
                movies: res.results
            });
        });
    }

    render() {
        return (
            <div className="home-movie-grid">
                {
                    this.state.movies.map((movie, i) => {
                        return (
                            <MovieTile
                                key={i}
                                poster={movie.poster_path}
                                title={movie.title}
                                genres={movie.genre_ids}
                                rating={movie.vote_average}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default MovieTileContainer;
