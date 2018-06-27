import {Component, OnInit, Input} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  hero: Hero;
  id_: number;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
  }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.id_ = id;

    this.heroService.getHero('/heroes', id).subscribe(val => {
      this.hero = <Hero>val;
      console.log('asdf ' + JSON.stringify(this.hero));
    });
  }

  updateHero(): void {
    console.log('update this ' + JSON.stringify(this.hero));
    if (this.heroService.updateHero('/heroes', this.hero.id, this.hero)) {
      alert('Updation successful!');
    }
  }

}
