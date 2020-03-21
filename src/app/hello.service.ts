import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }

  getHello(): string {
    return 'Hello service!';
  }
}
