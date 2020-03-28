import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private httpClient: HttpClient) { }

  getPublicQuote(): Observable<string> {
    return this.httpClient.get('http://localhost:3001/api/random-quote', {responseType: 'text'});
  }

  getProtectedQuote(): Observable<string> {
    return this.httpClient.get('http://localhost:3001/api/protected/random-quote',
    {responseType: 'text'});
  }

}
