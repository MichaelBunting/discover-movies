import React from 'react';

import Api from '../api/Api';

import MovieInfoContainer from '../containers/MovieInfoContiainer';

const MovieInfo = (props) => {
    return (
        <MovieInfoContainer
            movieId={props.match.params.movieId} />
    )
}

// class MovieInfo extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //
//     //     this.state = {
//     //         movieInfo: [],
//     //         loading: true,
//     //     }
//     // }
//
//     // componentDidMount() {
//     //     Api.getMovieInfo(this.props.match.params.movieId, (data) => {
//     //         Api.getVideo(data.id, (video) => {
//     //             let movieData = data;
//     //
//     //             movieData.video = video.key;
//     //
//     //             this.setState({
//     //                 movieInfo: movieData
//     //             });
//     //         });
//     //     });
//     // }
//
//     render() {
//         return (
//             <MovieInfoContainer
//                 movieId={this.props.match.params.movieId} />
//
//             // <div className="info">
//             //     <MovieInfoHeader
//             //         backdrop={this.state.movieInfo.backdrop_path}
//             //         genres={this.state.movieInfo.genres}
//             //         release={this.state.movieInfo.release_date}
//             //         title={this.state.movieInfo.title}
//             //         video={this.state.movieInfo.video} />
//             // </div>
//         )
//     }
// }

export default MovieInfo;