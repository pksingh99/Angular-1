import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForpipesComponent } from './forpipes.component';

describe('ForpipesComponent', () => {
  let component: ForpipesComponent;
  let fixture: ComponentFixture<ForpipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForpipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
