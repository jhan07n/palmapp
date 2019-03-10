import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashinpagePage } from './cashinpage.page';

describe('CashinpagePage', () => {
  let component: CashinpagePage;
  let fixture: ComponentFixture<CashinpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashinpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashinpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
