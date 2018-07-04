import {Component, OnInit} from '@angular/core';
import {MovieService} from '../movie.service';
import {Result} from '../model/movies-Result';
import {RootObject} from '../model/movies-ResultObject';
import {AuthService} from '../auth.service';
import {isDefined} from '@angular/compiler/src/util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.css']
})
export class MoviesDashboardComponent implements OnInit {
  rootObj: RootObject;
  movieBlocks: Result[] = [];
  scrollCallBack;
  currentPage: number = 1;
  finished: boolean = false;
  totalPgs:  number;

  constructor(private movieService: MovieService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.getMovies(this.currentPage);
  }

  getMovies(pg: number): any {
    if (this.finished) {
      return;
    }

    return this.movieService.getMoviesSearch('avengers', 1).subscribe(value => {
      console.log('searchMovies for page=' + this.currentPage);
      this.rootObj = <RootObject>value;
      this.movieBlocks = <Result[]> this.rootObj.results;
      this.totalPgs = this.rootObj.total_pages;
    });
  }

  onScroll(): any {
    this.currentPage++;
    console.log(this.currentPage + ' scroll func');
    if(this.currentPage<=this.totalPgs){
      this.getMovies(this.currentPage);
    }else{
      this.finished=true;
    }

  }

}
