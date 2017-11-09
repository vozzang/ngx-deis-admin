import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsBuildsComponent } from './apps-builds.component';

describe('AppsBuildsComponent', () => {
  let component: AppsBuildsComponent;
  let fixture: ComponentFixture<AppsBuildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsBuildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
