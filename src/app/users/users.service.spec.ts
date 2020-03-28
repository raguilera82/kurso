import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FAKE_USERS } from './users-fake.spec';
import { UsersProxyService } from './users-proxy.service';
import { User } from './users.model';
import { UsersService } from './users.service';


describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert userDTO to user', () => {
    const proxy = TestBed.inject(UsersProxyService);
    const spyService = spyOn(proxy, 'getUsers').and.callFake(() => of(FAKE_USERS));
    service.getUsers().subscribe(
      (users: User[]) => {
        expect(users[0].nombre).toEqual(FAKE_USERS[0].name);
      }
    );
    expect(spyService).toHaveBeenCalledTimes(1);
  });

});
