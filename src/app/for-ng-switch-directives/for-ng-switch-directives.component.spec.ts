import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForNgSwitchDirectivesComponent } from './for-ng-switch-directives.component';

describe('ForNgSwitchDirectivesComponent', () => {
  let component: ForNgSwitchDirectivesComponent;
  let fixture: ComponentFixture<ForNgSwitchDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForNgSwitchDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForNgSwitchDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
