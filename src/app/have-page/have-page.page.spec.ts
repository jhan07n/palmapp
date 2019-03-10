import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HavePagePage } from './have-page.page';

describe('HavePagePage', () => {
  let component: HavePagePage;
  let fixture: ComponentFixture<HavePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HavePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HavePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
