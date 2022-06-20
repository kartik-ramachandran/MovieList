import React, {Component} from 'react';
import {Link}  from 'react-router-dom';

interface props {
    movies: [],
    movieGenre: string
}

export class MovieCard extends Component<props> {  
    constructor(props: any) {
        super(props);
    }

	render() { 
        let filteredMovies = this.props.movies.filter((movie: any) => movie.genres.indexOf(this.props.movieGenre) != -1);
        return (
            <>
			{
                filteredMovies.map((movie: any, index: any) => (
                    <div className="card" style={{ width: '18%' }}>
                    <img className="card-img-top" src={movie.backdrop} alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <Link to={`/movie-description/${movie.id}`}>View Description</Link>
                    </div>
                    </div>
                ))
            }
		</>
        );		
    }
}