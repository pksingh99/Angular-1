import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForFormsComponent } from './for-forms.component';

describe('ForFormsComponent', () => {
  let component: ForFormsComponent;
  let fixture: ComponentFixture<ForFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
