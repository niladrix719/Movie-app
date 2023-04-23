import React from 'react';
import {addFavourite, removeFavourite} from '../actions'

class MovieCard extends React.Component {
  
  handelFavouriteClick = () => {
    const {movie} = this.props;
    this.props.dispatch(addFavourite(movie))
  }

  handelUnFavouriteClick = () => {
    const {movie} = this.props;
    this.props.dispatch(removeFavourite(movie));
  }

  render(){
    const {movie , isFavourite} = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            { !isFavourite ?
              <button className="favourite-btn" onClick={this.handelFavouriteClick}>Favourite</button>:
              <button className="unfavourite-btn" onClick={this.handelUnFavouriteClick}>Unfavourite</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;