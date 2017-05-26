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
                    var style = {
                        background: `url(http://image.tmdb.org/t/p/w1280/${slide.backdrop_path}) no-repeat center center / cover`
                    };

                    var genres = slide.genre_ids.map((id) => {
                        return getGenres(id);
                    });

                    return (
                        <div
                            key={i}
                            style={style}
                            className="slider__slide">
                            <div className="slider__content">
                                <h2 className="slider__title">{slide.title}</h2>

                                <div className="slider__genre-container">
                                    {
                                        genres.map((genre, i) => {
                                            return (
                                                <span key={i}
                                                    className="slider__genre">
                                                    {genre}
                                                </span>
                                            )
                                        })
                                    }
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
