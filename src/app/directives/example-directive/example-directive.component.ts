import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-directive',
  templateUrl: './example-directive.component.html',
  styleUrls: ['./example-directive.component.css']
})
export class ExampleDirectiveComponent implements OnInit {

  colors: string[];
  show: boolean;

  constructor() { }

  ngOnInit(): void {
    this.colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple'];
    this.show = false;
  }

}
