import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from './dog';

const API_URL = 'https://dog.ceo/api/breeds/list/all';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) {}
    dogList(): Observable<Dog[]> {
      return this.http
      .get<Dog[]>(API_URL + '/dogs');
    }
  }

