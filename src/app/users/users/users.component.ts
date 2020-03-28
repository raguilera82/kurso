import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.users$ = this.service.getUsers();
  }

}
