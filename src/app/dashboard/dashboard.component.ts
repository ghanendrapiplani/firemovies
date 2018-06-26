import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topHeroObs: Observable<any[]>;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.topHeroObs = this.heroService.getTopHeroes('/heroes');
  }

}
