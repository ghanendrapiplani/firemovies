import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  heroesObservable: Observable<any[]>;
  hero: Hero;

  constructor(private db: AngularFireDatabase) {
  }

  getHeroes(pathStr: string): Observable<any[]> {
    return this.db.list(pathStr).valueChanges();
  }

  getTopHeroes(pathStr: string): Observable<any[]> {
    return this.db.list(pathStr, ref => ref.orderByChild('id').limitToFirst(4)).valueChanges();
  }

  getHero(pathStr: string, id: number): Observable<any> {
    console.log(`${pathStr}/${id}`);
    return this.db.object(`${pathStr}/${id}`).valueChanges();
  }

  updateHero(pathStr: string, id: number, h: Hero): boolean {
    return (this.fun(this.db.object(`${pathStr}/${id}`).update(h)));

  }

  fun(pro: Promise<any>): any {
    return pro.then(_ => {
      console.log('done updation');
      return true;
    });
  }
}
