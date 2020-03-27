import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/confirm.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, CanComponentDeactivate {

  @Input() message: string;
  @Output() reply = new EventEmitter();

  id: string;

  saved: boolean;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.saved = false;
    this.reply.emit('Noooooooooooooooooooo');
    this.id = this.activatedRoute.snapshot.params.pepito;
  }

  canDeactivate(): boolean {
    if (this.saved === false) {
      return confirm('¿Estás seguro?');
    }
    return true;
  }

  onSave() {
    this.saved = true;
  }



}
