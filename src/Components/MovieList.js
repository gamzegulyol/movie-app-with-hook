import React from 'react';
import { connect } from 'react-redux';
const MovieList = ({ loadingP, moviesP, request }) => {
    console.log(loadingP, moviesP)
    if (loadingP === true) {
        return (
            <div>
                <p>Loading</p>
            </div>
        );

    }
    return (
        <div>
            {moviesP.map(item => (
                <div key={item.imdbID}>
                    <img src={item.Poster} alt="description" />
                    <h5>{item.Title}</h5>
                    <p>{item.Year}</p>
                </div>
            ))}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        allProps: state.app.loading,
        moviesP: state.app.movies
    };
}


export default connect(mapStateToProps)(MovieList);