import {Component, OnInit} from '@angular/core';
import {MovieService} from '../movie.service';
import {Result} from '../model/movies-Result';
import {RootObject} from '../model/movies-ResultObject';
import {AuthService} from '../auth.service';
import {isDefined} from '@angular/compiler/src/util';
import {Router} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';

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
  totalPgs: number;

  constructor(private movieService: MovieService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.getMovies(this.currentPage);
  }

  getMovies(pg: number): any {
    if (this.finished) {
      return;
    }

    return this.movieService.getMoviesSearch('avengers', pg).subscribe(value => {
      console.log('searchMovies for page=' + this.currentPage);
      this.rootObj = <RootObject>value;
      if (this.movieBlocks.length === 0) {
        this.movieBlocks = <Result[]> this.rootObj.results;
      }
      if (this.movieBlocks.length > 0) {
        const listCopy = Object.assign([], this.movieBlocks);
        listCopy.push(this.movieBlocks);

      }
      console.log('current page from response = ' + this.rootObj.page + ' %%% ' + this.movieBlocks.length);
      this.totalPgs = this.rootObj.total_pages;
    });
  }

  onScroll(): any {
    this.currentPage++;
    console.log(this.currentPage + ' scroll func');
    if (this.currentPage <= this.totalPgs) {
      this.getMovies(this.currentPage);
    } else {
      this.finished = true;
    }

  }

}
