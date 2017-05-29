import React from 'react';

import Slider from '../components/Slider';

import Api from '../api/Api';

class SliderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slides: [],
            videos: [],
            loading: true,
        }

        this.getGenres = this.getGenres.bind(this);
    }

    componentDidMount() {
        Api.getUpcomingMovies((data) => {
            var sliderSlides = data.results.slice(0, 5);

            this.setState({
                slides: sliderSlides
            }, () => {
                var videos = [];

                var promise = this.state.slides.map((slide) => {
                    return new Promise((resolve) => {
                        var video = Api.getVideo(slide.id, (vid) => {
                            videos.push(vid);
                            resolve();
                        });
                    });
                });

                Promise.all(promise)
                        .then(() => {
                            this.setState({
                                videos: videos,
                                loading: false,
                            });
                        });

                $('.slider').slick({
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
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
                getGenres={this.getGenres}
                videos={this.state.videos}
                loading={this.state.loading}/>
        )
    }
}

export default SliderContainer;
