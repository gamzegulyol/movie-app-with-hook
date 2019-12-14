import React from "react";
import { connect, useSelector } from "react-redux";
import { withRouter, useHistory, Link } from "react-router-dom";

const MovieDetail = ({ location }) => {
  const movieList = useSelector(state => state.app.movies);
  //   const history = usexHistory();

  //   const _onClick = () => {
  //     history.push('/');
  //   };

  const selectedMovie = movieList.filter(item => {
    if (item.imdbID === location.state.movieId) {
      return true;
    }
    return false;
  });

  console.log("selectedMovie :", selectedMovie);
  if (selectedMovie.length <= 0) {
    return <Link to="/">Lutfen anasayfaya gidiniz</Link>;
  }
  return (
    <div>
      <h5>{selectedMovie[0].Title}</h5>
      <img src={selectedMovie[0].Poster} alt="description" />
      <p>{selectedMovie[0].Year}</p>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     movieList: state.app.movies
//   };
// };
export default withRouter(MovieDetail);