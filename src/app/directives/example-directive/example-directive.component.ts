import { Component, OnInit } from '@angular/core';
import { HelloService } from 'src/app/hello.service';

@Component({
  selector: 'app-example-directive',
  templateUrl: './example-directive.component.html',
  styleUrls: ['./example-directive.component.css']
})
export class ExampleDirectiveComponent implements OnInit {

  colors: string[];
  show: boolean;
  hello: string;

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {
    this.colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple'];
    this.show = true;
    this.hello = this.helloService.getHello();
  }

}
