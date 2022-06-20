import React, {Component, ReactNode} from 'react';
import { AppService }  from '../Services/app.service';
import  {Link}  from 'react-router-dom';

export class MovieDescription extends Component<{}, { movies: any, loading: boolean }> {
movieId: any = "";

constructor(props: any) {
    super(props); 
    this.state = { movies: [], loading: true };
}

componentDidMount() {
    this.fetchMovieList();
}

render () {    
    let id = window.location.pathname.split('/')[2];
    let filteredMovie = this.state.movies.filter((m: any) => m.id == id);
    return (
        <>
        {
            filteredMovie.map((movie: any, index: any) => (
               
                <div className="card">
                     <Link to={`/`}>back</Link>
                <img className="card-img-left" src={movie.backdrop} alt="Card image cap"></img>
                <div className="card-body">
                  <h5 className="card-title">{movie.title}  (rating - {movie.imdb_rating})</h5>
                  <h5 className="card-title">{movie.released_on} | {movie.length} | {movie.director}</h5>
                  <p className="card-text"><strong>Movie Description:</strong> {movie.overview}</p>
                </div>
                </div>
            ))
        }
    </>
	);
}

async fetchMovieList() {
    const appService = new AppService();
    let returnedMoviesList = await appService.getMovies();
    this.setState({ movies: returnedMoviesList.movies,  loading: false });
}

}
