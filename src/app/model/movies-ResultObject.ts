import {Result} from './movies-Result';

export interface RootObjectInterface {
  page: number;
  total_results: number;
  total_pages: number;
  results: Result[];
}

export class RootObject implements RootObjectInterface{
  page: number;
  total_results: number;
  total_pages: number;
  results: Result[];
}
