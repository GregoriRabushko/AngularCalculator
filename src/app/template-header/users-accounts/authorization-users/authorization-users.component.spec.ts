import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationUsersComponent } from './authorization-users.component';

describe('AuthorizationUsersComponent', () => {
  let component: AuthorizationUsersComponent;
  let fixture: ComponentFixture<AuthorizationUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
