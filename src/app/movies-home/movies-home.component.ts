import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.css']
})
export class MoviesHomeComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
    if (authService.currentUser) {
      router.navigate(['movies/dash']);
    }
  }

//show loading page with welcome username message

  ngOnInit() {
  }

  signInWithGoogle() {
    this.authService.googleLogin();
  }
}
