import {Result} from './movies-Result';

export interface RootObject {
  page: number;
  total_results: number;
  total_pages: number;
  results: Result[];
}
