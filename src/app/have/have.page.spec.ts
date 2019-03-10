import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HavePage } from './have.page';

describe('HavePage', () => {
  let component: HavePage;
  let fixture: ComponentFixture<HavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
