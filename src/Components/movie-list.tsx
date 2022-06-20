import React, { Component } from 'react';
import { AppService }  from '../Services/app.service';
import GenreList from './genre-list';

export class MovieList extends Component<{}, { moviesList: [], genreList: [], loading: boolean }> {
    static displayName = MovieList.name;

    constructor(props: any) {
        super(props);
        this.state = { moviesList: [], genreList: [], loading: true };
        this.searchOnBlur = this.searchOnBlur.bind(this);
    }

    componentDidMount() {
        this.fetchMovieList();
    }

    renderMoviesList() {
        return (
            <div className='container-fluid movie-app'>
              <GenreList movies={this.state.moviesList} movieGenre={this.state.genreList} />        
		    </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderMoviesList();
        return (
            <div>
                <h1 id="tabelLabel" >Movie List</h1>
                <div className="input-group">
                    <div className="form-outline">
                        <input type="search" id="form1" className="form-control"  onBlur={this.searchOnBlur}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.searchOnBlur}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                {contents}
            </div>
        );
    }
    async searchOnBlur(event: any) {
        const appService = new AppService();
        let returnedMoviesList = await appService.getMovie(event.target.value);
        let returnedGenreList = this.getUniqueGenres(returnedMoviesList);
        this.setState({ moviesList: returnedMoviesList.movies, genreList: returnedGenreList, loading: false });
    }
    async fetchMovieList() {
        const appService = new AppService();
        let returnedMoviesList = await appService.getMovies();
        let returnedGenreList = this.getUniqueGenres(returnedMoviesList);
        this.setState({ moviesList: returnedMoviesList.movies, genreList: returnedGenreList, loading: false });
    }

    getUniqueGenres(moviesList: any) {

        let genreList: any = [];

        moviesList.movies.map((movie: any, index: any) => {
            movie.genres.forEach((g: any) => {
                genreList.push(g);
            });
        });

        return genreList.filter((x: any, i: any, a: any) => a.indexOf(x) == i)
    }
}
