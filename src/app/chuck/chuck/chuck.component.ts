import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ChuckService } from '../chuck.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  publicQuote$: Observable<string>;

  constructor(private chuckService: ChuckService) { }

  ngOnInit(): void {
    this.publicQuote$ = this.chuckService.getPublicQuote();
  }

}
