import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassParametersComponent } from './pass-parameters.component';

describe('PassParametersComponent', () => {
  let component: PassParametersComponent;
  let fixture: ComponentFixture<PassParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
