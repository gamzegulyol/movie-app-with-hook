import React from "react";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";

const MovieList = ({ loadingP, moviesP, request, history }) => {
  // // react-router history hook fonksiyonu
  // const history = useHistory();

  //connect ile baglamadigimiz icin undefined gelir
  console.log("request :", request);

  const _onClick = id => {
    console.log("test :", id);
    history.push({ pathname: "/detay", state: { movieId: id } });
  };

  if (loadingP === true) {
    return (
      <div>
        <p>loading</p>
      </div>
    );
  }
  return (
    <div>
      {moviesP.map(item => (
        <div onClick={() => _onClick(item.imdbID)} key={item.imdbID}>
          <h5>{item.Title}</h5>
          <img src={item.Poster} alt="description" />
          <p>{item.Year}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    allprops: state.app.loading,
    moviesP: state.app.movies
  };
};

export default withRouter(connect(mapStateToProps)(MovieList));