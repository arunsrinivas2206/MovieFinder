import { Component } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
    moduleId: module.id,
    selector: 'movies',
    templateUrl: 'movies.component.html'
})
export class MoviesComponent { 
    popularList:Array<Object>;
    inTheatresList:Array<Object>;
    searchTerm:string;
    searchRes:Array<Object>;

    constructor(private movieService: MovieService) {
        this.movieService.getPopularMovies().subscribe(res => {
            this.popularList = res.results;
        });

        this.movieService.getInTheatreMovies().subscribe(res => {
            this.inTheatresList = res.results;
        });
    }

    searchMovies() {
        this.movieService.searchMovies(this.searchTerm).subscribe(res => {
        	console.log(res.results);
        	this.searchRes = res.results;
        })
    }
}
