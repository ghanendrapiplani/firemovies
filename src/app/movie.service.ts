import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RootObject} from './model/movies-ResultObject';
import {catchError} from 'rxjs/operators';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';

const mBasePath: string = environment.movies_Db.basePath;

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private handleError: HandleError;
  finished: boolean = false;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('MovieService');
  }

  getMoviesSearch(movieQuery: string, page: number): Observable<any> {
    const fullPath: string = mBasePath + `movie?q=${movieQuery}&page=` + page;
    console.log(page + 'full path movies ' + fullPath);
    return this.http.get<RootObject>(fullPath).pipe(
      catchError(this.handleError<any>('searchMovies', [])));
  }
}
