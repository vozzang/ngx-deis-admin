import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsPodsComponent } from './apps-pods.component';

describe('AppsPodsComponent', () => {
  let component: AppsPodsComponent;
  let fixture: ComponentFixture<AppsPodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsPodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsPodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
