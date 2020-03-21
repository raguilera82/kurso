import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  messageToChild: string;
  messageFromChild: string;

  constructor() { }

  ngOnInit(): void {
    this.messageToChild = 'Yo soy tu padre';
  }

  onMessageFromChild(ev) {
    this.messageFromChild = ev;
  }

}
