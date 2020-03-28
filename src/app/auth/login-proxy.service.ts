import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TokenDTO } from './auth-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginProxyService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<TokenDTO> {
    return this.httpClient.post<TokenDTO>('http://localhost:3001/auth',
          {username, password});
  }

}
