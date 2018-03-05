import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForobservableComponent } from './forobservable.component';

describe('ForobservableComponent', () => {
  let component: ForobservableComponent;
  let fixture: ComponentFixture<ForobservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForobservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
