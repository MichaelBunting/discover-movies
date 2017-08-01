import React from 'react';

const Slider = (props) => {
    const getGenres = (genreId) => {
        return props.getGenres(genreId);
    };

    return (
        <div className="slider-container">
            <div className="slider__dots"></div>

            <div className="slider">
                {props.slides.map((slide, i) => {
                    const style = {
                        background: `url(http://image.tmdb.org/t/p/w1280/${slide.backdrop_path}) no-repeat center center / cover`
                    };

                    const genres = slide.genre_ids.map((id) => {
                        return getGenres(id);
                    });

                    if (!props.loading) {
                        var video = props.videos[i].key;
                    }

                    const newDate = new Date(slide.release_date).toDateString().split(' ');
                    const date = `${newDate[2]} ${newDate[1]}, ${newDate[3]}`;

                    return (
                        <div
                            key={i}
                            style={style}
                            className="slider__slide header">
                            <div className="header__content container">
                                <h2 className="header__title">{slide.title}</h2>

                                <div className="header__genre-container">
                                    {
                                        genres.map((genre, i) => {
                                            return (
                                                <span key={i}
                                                    className="header__genre">
                                                    {genre}
                                                </span>
                                            )
                                        })
                                    }
                                </div>

                                <a  {...video ? {href: `https://www.youtube.com/watch?v=${video}`} : ''}
                                    className="btn btn--primary btn--lg header__btn"
                                    target="_blank">
                                    Watch Trailer <i className="fa fa-play-circle-o"></i>
                                </a>
                            </div>

                            <div className="header__date-container">
                                In theaters
                                <div className="header__date">
                                    {date}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Slider;
