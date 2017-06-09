import React from 'react';

import Api from '../api/Api';

import FilterBar from '../components/FilterBar';
import MovieTile from '../components/MovieTile';

class MovieTileContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            genres: [],
            date: '2016-1-1',
            baseOptions: {},
            filters: {
                'Popularity': 'popularity.desc',
                'Release Date': 'release_date.desc',
                'Rating': 'vote_average.desc'
            }
        };

        this.changeFilter = this.changeFilter.bind(this);
    }

    componentDidMount() {
        const currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - 1);

        let date = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

        this.setState({
            date: date,
            baseOptions: {
                page: 1,
                'primary_release_date.gte': date,
            }
        }, () => {
            let options = this.state.baseOptions;

            options.sort_by = 'popularity.desc';

            Api.getMovies(options, (res) => {
                this.setState({
                    movies: res.results
                });
            });
        });
    }

    changeFilter(e, newFilter) {
        let filters = Array.prototype.slice.call(document.querySelectorAll('.filter__item'));

        filters.forEach((ele) => {
            ele.classList.remove('active');
        });

        e.nativeEvent.target.classList.add('active');

        let options = this.state.baseOptions;

        options.sort_by = newFilter;
        options['vote_average.gte'] = 2;

        Api.getMovies(options, (res) => {
            this.setState({
                movies: res.results
            });
        });
    }

    render() {
        return (
            <div className="home-movie-grid">
                <FilterBar
                    changeFilter={this.changeFilter}
                    filters={this.state.filters}/>

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
