import {Component, OnInit, Input} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
  }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero('/heroes', id).subscribe((h) => {
      console.log(h);
      this.hero = h;
    });
  }

}
