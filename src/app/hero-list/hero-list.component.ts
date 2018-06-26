import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {a} from '@angular/core/src/render3';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroObs: Observable<any[]>;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroObs = this.heroService.getHeroes('/heroes');
  }

}
