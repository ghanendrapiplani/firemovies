import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RootObject} from './model/movie';
import {catchError} from 'rxjs/operators';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';

const mApiKey: string = environment.movies_Db.apiKey;
const mBasePath: string = environment.movies_Db.basePath;

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('MovieService');
  }

  getMoviesSearch(movieQuery: string): Observable<any> {
    const fullPath: string = mBasePath + `search/movie?language=en-US&page=1&query=${movieQuery}&api_key=${mApiKey}`;
    console.log(fullPath);
    return this.http.get<RootObject>(fullPath).pipe(
      catchError(this.handleError<any>('searchMovies', [])));
  }
}
