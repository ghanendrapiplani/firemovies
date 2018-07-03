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

  constructor(private movieService: MovieService, private authService: AuthService, private router: Router) {
    // if (!isDefined(authService.currentUser)) {
    //   alert('login to continue');
    //   router.navigate(['movies/home']);
    // }
  }

  ngOnInit() {
    this.movieService.getMoviesSearch('avengers').subscribe(value => {
      console.log('oninit dashboard');
      this.rootObj = <RootObject>value;
      this.movieBlocks = <Result[]> this.rootObj.results;
      console.log('asfd ' + this.movieBlocks);
    });
  }

}
