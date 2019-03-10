import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WantspagePage } from './wantspage.page';

describe('WantspagePage', () => {
  let component: WantspagePage;
  let fixture: ComponentFixture<WantspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WantspagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WantspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
