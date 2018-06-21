import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }                       from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';

import { SidenavComponent } from './sidenav.component';
import { RegisterFormComponent } from '../register/register-form/register-form.component';

import { AuthService } from '../shared/services/auth.service';

describe('SidenavComponent', () => {
  let tokenMock = jasmine.createSpyObj('tokenMock', ['validateToken', 'subscribe']);
  tokenMock.validateToken.and.returnValue(tokenMock);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidenavComponent,
        RegisterFormComponent
      ],
      imports: [
        RouterTestingModule,
        MaterializeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [
        AuthService,
        { provide: Angular2TokenService, useValue: tokenMock }
      ]
    }).compileComponents();
  }));

  it('should create', async(() => {
    const fixture = TestBed.createComponent(SidenavComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
