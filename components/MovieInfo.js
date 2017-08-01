import React from 'react';

const MovieInfo = (props) => {
    let releaseDate = props.movieInfo.release_date ? 
                      new Date(props.movieInfo.release_date).toLocaleString('en-us', {month: 'long', day: '2-digit', year: 'numeric'}) :
                      '';

    return (
        <div className="info">
            <div className="container container--tuck">
                <div className="info__header">
                    <div className="info__poster-container">
                        <div className="info__poster"
                             {...props.movieInfo.poster_path ? {style: {backgroundImage: `url(http://image.tmdb.org/t/p/w342${props.movieInfo.poster_path})`}} : ''}>
                        </div>

                        <a {...props.movieInfo ? 
                                {href: `http://www.imdb.com/title/${props.movieInfo.imdb_id}`}
                            : '#'} 
                            target="_blank"
                            className="info__btn">
                                Go to IMDB Page
                            </a>
                    </div>

                    <div className="info__header-content">
                        <h1 className="info__title">
                            {props.movieInfo.title}
                        </h1>

                        <div className="info__genre-container">
                            {props.movieInfo.genres ?
                                props.movieInfo.genres.map((genre, i) => {
                                    return (
                                        <span key={i}
                                              className="info__genre">
                                            {genre.name}
                                        </span>
                                    )
                                })
                            : ''}
                        </div>

                        <div className="info__section">
                            <div className="info__text">
                                {releaseDate}
                            </div>
                            <div className="info__text">
                                <span className="info__text-white">Director:</span>
                                {props.movieInfo.credits ?
                                    props.movieInfo.credits.director[0].name
                                : ''}
                            </div>
                            <div className="info__text">
                                <span className="info__text-white">Writers:</span>
                                {props.movieInfo.credits ?
                                    props.movieInfo.credits.writers.map((writer, i) => {
                                        return writer.name + (i + 1 < props.movieInfo.credits.writers.length ? ', ' : '');
                                    })
                                : ''}
                            </div>
                        </div>

                        <div className="info__section">
                            <div className="info__text info__popularity">
                                <i className="fa fa-line-chart icon"></i>
                                {parseInt(props.movieInfo.popularity)}
                            </div>
                        </div>

                        <div className="info__section info__desc">
                            {props.movieInfo.overview}
                        </div>
                    </div>

                    <div className="info__rating-container">
                        <ul className="info__rating-stars">
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                        </ul>

                        <div className="info__rating">
                            {props.movieInfo.vote_average}
                        </div>

                        <div className="info__rating-users">
                            {props.movieInfo.vote_count} Users
                        </div>
                    </div>
                </div>

                <div className="info__credit-container">
                    <div className="info__credit-title">Actors</div>

                    <div className="info__credit-grid">
                        {props.movieInfo.credits ? 
                            props.movieInfo.credits.actors.map((actor, i) => {
                                return (
                                    <a key={i}
                                       href={`https://www.themoviedb.org/person/${actor.id}`}
                                       target="_blank"
                                       className="info__credit-block">
                                        <div className="info__credit"
                                             style={{backgroundImage: `url(http://image.tmdb.org/t/p/w185${actor.profile_path})`}}
                                             data-name={actor.name}></div>
                                    </a>
                                );
                            })
                        : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;