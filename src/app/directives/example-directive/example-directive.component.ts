import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private helloService: HelloService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple'];
    this.show = true;
    this.hello = this.helloService.getHello();
  }

  navToDataBinding() {
    this.router.navigate(['databinding']);
  }

}
