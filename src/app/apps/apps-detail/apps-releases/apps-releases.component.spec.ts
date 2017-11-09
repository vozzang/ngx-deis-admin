import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsReleasesComponent } from './apps-releases.component';

describe('AppsReleasesComponent', () => {
  let component: AppsReleasesComponent;
  let fixture: ComponentFixture<AppsReleasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsReleasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
