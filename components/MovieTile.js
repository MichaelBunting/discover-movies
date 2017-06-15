import React from 'react';
import { Link } from 'react-router-dom';

import Api from '../api/Api';

const MovieTile = (props) => {
    return (
        <div className="movie-container">
            <Link to={"/movie/" + props.id} className="movie">
                <div className="movie__poster"
                     {...props.poster ? {style: {backgroundImage: `url(http://image.tmdb.org/t/p/w342${props.poster})`}} : {}}>
                </div>

                <div className="movie__content">
                    <div className="movie__title">
                        {props.title}
                    </div>

                    <div className="movie__genre">
                        {
                            props.genres.map((genre, i) => {
                                return Api.getGenres(genre) + (i + 1 < props.genres.length ? ', ' : '');
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
            </Link>
        </div>
    )
}

export default MovieTile;
