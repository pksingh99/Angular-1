import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLifeEventsComponent } from './for-life-events.component';

describe('ForLifeEventsComponent', () => {
  let component: ForLifeEventsComponent;
  let fixture: ComponentFixture<ForLifeEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForLifeEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForLifeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
