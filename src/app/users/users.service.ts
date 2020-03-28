import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDTO } from './users-dto';
import { UsersProxyService } from './users-proxy.service';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private proxy: UsersProxyService) { }

  getUsers(): Observable<User[]> {
    return this.proxy.getUsers().pipe(
      map((usersDTO: UserDTO[]) => {
        let users: User[] = [];
        usersDTO.forEach((userDTO: UserDTO) => {
          const user: User = {
            ciudad: userDTO.address.city,
            correo: userDTO.email,
            nombre: userDTO.name,
            telf: userDTO.phone,
            usuario: userDTO.username
          };
          users = [...users, user];
        });
        return users;
      })
    );
  }
}
