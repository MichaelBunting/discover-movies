import React from 'react';

import Slider from '../components/Slider';

import Api from '../helpers/Api';

class SliderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slides: []
        }
    }

    componentDidMount() {
        Api.getUpcomingMovies((data) => {
            var sliderSlides = data.results.slice(0, 5);

            this.setState({
                slides: sliderSlides
            });
        });
    }

    render() {
        return (
            <Slider
                slides={this.state.slides} />
        )
    }
}

export default SliderContainer;
