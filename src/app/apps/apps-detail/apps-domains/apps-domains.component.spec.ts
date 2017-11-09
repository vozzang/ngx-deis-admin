import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsDomainsComponent } from './apps-domains.component';

describe('AppsDomainsComponent', () => {
  let component: AppsDomainsComponent;
  let fixture: ComponentFixture<AppsDomainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsDomainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
