import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsConfigFormComponent } from './apps-config-form.component';

describe('AppsConfigFormComponent', () => {
  let component: AppsConfigFormComponent;
  let fixture: ComponentFixture<AppsConfigFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsConfigFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsConfigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
