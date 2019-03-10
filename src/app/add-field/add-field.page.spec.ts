import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFieldPage } from './add-field.page';

describe('AddFieldPage', () => {
  let component: AddFieldPage;
  let fixture: ComponentFixture<AddFieldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFieldPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFieldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
