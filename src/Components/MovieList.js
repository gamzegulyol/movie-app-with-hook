import React from "react";
import {connect } from "react-redux";

const MovieList = () => {
    return(
        <div>
            <h5>Movie Title</h5>
            <p>Movie Description</p>
        </div>

    );
};
const mapStateToProps = (state) =>{
    return{
        loading: state.app.loading,
        movies: state.app.movies
    };
};

export default connect(mapStateToProps)(MovieList);