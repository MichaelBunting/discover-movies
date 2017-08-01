import React from 'react';

import Api from '../api/Api';

import MovieInfoHeader from '../components/MovieInfoHeader';
import MovieInfo from '../components/MovieInfo';

class MovieInfoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieInfo: [],
            loading: true
        }
    }

    componentDidMount() {
        let movieData = {};

        let movieInfo = new Promise((resolve) => {
           Api.getMovieInfo(this.props.movieId, (data) => {
                movieData = data;
                resolve('first');
           });
        });

        let movieVideo = new Promise((resolve) => {
            Api.getVideo(this.props.movieId, (data) => {
                movieData.video = data.key;
                resolve('second');
            });
        });

        let movieCredits = new Promise((resolve) => {
            Api.getCredits(this.props.movieId, (data) => {
                let director = data.crew.filter((entry) => {
                    if (entry.job === 'Director') {
                        return entry;
                    }
                });

                let writers = data.crew.filter((entry) => {
                    if (entry.department === 'Writing' || entry.job === 'Writer') {
                        return entry;
                    }
                });

                let cast = data.cast.filter((entry) => {
                    if (!entry.department) {
                        return entry;
                    }
                });

                movieData.credits = {};

                movieData.credits.actors = cast.slice(0, 6);
                movieData.credits.director = director;
                
                if (writers)
                    movieData.credits.writers = writers.slice(0, 2);

                resolve('third');
            });
        });

        Promise.all([movieInfo, movieVideo, movieCredits])
            .then(() => {
                this.setState({
                    movieInfo: movieData
                });
            });
    }

    render() {
        return (
            <div>
                <MovieInfoHeader
                    backdrop={this.state.movieInfo.backdrop_path}
                    genres={this.state.movieInfo.genres}
                    release={this.state.movieInfo.release_date}
                    title={this.state.movieInfo.title}
                    video={this.state.movieInfo.video} />

                <MovieInfo
                    movieInfo={this.state.movieInfo} />
            </div>
        )
    }
}

export default MovieInfoContainer;