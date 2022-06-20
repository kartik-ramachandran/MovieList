import React, {Component} from 'react';
import {MovieCard} from './movie-card';

interface props {
    movies: [];
    movieGenre: [];
}

export class GenreList extends Component<props> {

    constructor(props: any) {
        super (props);
    }

    render () {
        return (
            <>
                {
                    this.props.movieGenre.map((genre: any, index: any) =>
                    (                
                        <div className='row mt-5'>
                            <strong className="text-white bg-primary p-2">{genre}</strong>
                            <MovieCard movies={this.props.movies} movieGenre={genre} />
                        </div>
                    ))
                }
            </>
        );
    }
};

export default GenreList;