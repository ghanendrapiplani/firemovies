import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {Hero} from './hero';
import {promise} from 'selenium-webdriver';
import filter = promise.filter;
import {AngularFireModule} from 'angularfire2';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase,
              private af: AngularFireModule) {
  }

  getHeroes(pathStr: string): Observable<any[]> {
    return this.db.list(pathStr).valueChanges();
  }

  getTopHeroes(pathStr: string): Observable<any[]> {
    return this.db.list(pathStr, ref => ref.orderByChild('id').limitToFirst(4)).valueChanges();
  }

  getHero(pathStr: string, id: number): Observable<any> {
    return this.db.list(`${pathStr}/${id}`).valueChanges().;
  }
}
