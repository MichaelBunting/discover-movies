import React from 'react';

import Slider from '../components/Slider';

import Api from '../helpers/Api';

class SliderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slides: []
        }

        this.getGenres = this.getGenres.bind(this);
    }

    componentDidMount() {
        Api.getUpcomingMovies((data) => {
            var sliderSlides = data.results.slice(0, 5);

            this.setState({
                slides: sliderSlides
            }, () => {
                $('.slider').slick({
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    appendDots: '.slider__dots',
                });
            });
        });
    }

    getGenres(genreId) {
        return Api.getGenres(genreId);
    }

    render() {
        return (
            <Slider
                slides={this.state.slides}
                getGenres={this.getGenres}/>
        )
    }
}

export default SliderContainer;
