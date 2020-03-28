import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserDTO } from './users-dto';
import { FAKE_USERS } from './users-fake.spec';
import { UsersProxyService } from './users-proxy.service';


describe('UsersProxyService', () => {
  let service: UsersProxyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersProxyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get users from server', () => {
    service.getUsers().subscribe(
      (users: UserDTO[]) => expect(users).toBe(FAKE_USERS)
    );
    const request = httpMock.expectOne('http://localhost:3001/api/public/users');
    expect(request.request.method).toEqual('GET');
    request.flush(FAKE_USERS);
    httpMock.verify();
  });

});
