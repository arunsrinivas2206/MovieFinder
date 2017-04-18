import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
	apikey:string;
	constructor(private _jsonp:Jsonp) {
		this.apikey = '30ce7eb38b0cb7babbaa7293b3e1f142';
		console.log('movie service is ready');
	}

	getPopularMovies() {
		return this._jsonp.get("https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key="+this.apikey).map(res => res.json());
	}

	getInTheatreMovies() {
		return this._jsonp.get("https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-03-18&primary_release_date.lte=2017-04-18&api_key="+this.apikey).map(res => res.json());
	}

	searchMovies(searchTerm:string) {
		return this._jsonp.get("https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query="+searchTerm+"&sort_by=popularity.desc&api_key="+this.apikey).map(res => res.json());
	}

	getMovie(id:string) {
		console.log("https://api.themoviedb.org/3/discover/movie/"+id+"?callback=JSONP_CALLBACK&api_key="+this.apikey);
		return this._jsonp.get("https://api.themoviedb.org/3/movie/"+id+"?callback=JSONP_CALLBACK&api_key="+this.apikey).map(res => res.json());
	}
}

