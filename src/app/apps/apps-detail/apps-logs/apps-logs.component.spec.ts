import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsLogsComponent } from './apps-logs.component';

describe('AppsLogsComponent', () => {
  let component: AppsLogsComponent;
  let fixture: ComponentFixture<AppsLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
