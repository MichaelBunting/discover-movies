import React from 'react';

const MovieInfoHeader = (props) => {
    let releaseDate = new Date(props.release).toDateString().split(' ');
    const release = `${releaseDate[2]} ${releaseDate[1]}, ${releaseDate[3]}`;

    return (
        <div className="header"
             {...props.backdrop ? {style: {backgroundImage: `url(http://image.tmdb.org/t/p/w1280/${props.backdrop})`}} : {}}>
            <div className="header__content container">
                <h1 className="header__title">
                    {props.title}
                </h1>

                <div className="header__genre-container">
                    {props.genres ?
                        props.genres.map((genre, i) => {
                            return (
                                <span className="header__genre" key={i}>
                                    {genre.name}
                                </span>
                            )
                        })
                    : ''}
                </div>

                <a href={"https://www.youtube.com/watch?v=" + props.video}
                   className="btn btn--lg btn--primary header__btn"
                   target="_blank">
                    Watch Trailer <i className="fa fa-play-circle-o"></i>
                </a>
            </div>

            <div className="header__date-container">
                In theaters
                <div className="header__date">
                    {release}
                </div>
            </div>
        </div>
    )
}

export default MovieInfoHeader;