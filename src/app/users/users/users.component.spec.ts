import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FAKE_USERS } from '../users-fake.spec';
import { UsersProxyService } from '../users-proxy.service';
import { User } from '../users.model';
import { UsersComponent } from './users.component';


describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set users', () => {
    const proxy = TestBed.inject(UsersProxyService);
    const spyService = spyOn(proxy, 'getUsers').and.callFake(() => of(FAKE_USERS));
    component.ngOnInit();
    component.users$.subscribe(
      (users: User[]) => {
        expect(users[0].nombre).toEqual(FAKE_USERS[0].name);
      }
    );
    expect(spyService).toHaveBeenCalled();
  });

});
