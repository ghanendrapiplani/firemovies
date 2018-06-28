import {Component, OnInit} from '@angular/core';
import {MovieService} from '../movie.service';
import {Result, RootObject} from '../model/movie';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.css']
})
export class MoviesDashboardComponent implements OnInit {
  rootObj: RootObject;
  movieBlocks: Result[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getMoviesSearch('avengers').subscribe(value => {
      this.rootObj = <RootObject>value;
      this.movieBlocks = <Result[]> this.rootObj.results;
      console.log('asfd ' + this.movieBlocks);
    });
  }

}
