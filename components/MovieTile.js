import React from 'react';

import Api from '../api/Api';

const MovieTile = (props) => {
    return (
        <div className="movie">
            <div className="movie__poster"
                 style={{backgroundImage: `url(http://image.tmdb.org/t/p/w342${props.poster})`}}>
            </div>

            <div className="movie__content">
                <div className="movie__title">
                    {props.title}
                </div>

                <div className="movie__genre-container">
                    {
                        props.genres.map((genre, i) => {
                            return (
                                <div key={i}
                                    className="movie__genre">
                                    {Api.getGenres(genre)}
                                    {
                                        i + 1 < props.genres.length ?
                                        ',' : ''
                                    }
                                </div>
                            )
                        })
                    }
                </div>

                <div className="movie__rating">
                    <i className="fa fa-star movie__rating-star"></i>

                    <div className="movie__rating-num">
                        {props.rating.toFixed(1)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieTile;
