import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalaryPage } from './add-salary.page';

describe('AddSalaryPage', () => {
  let component: AddSalaryPage;
  let fixture: ComponentFixture<AddSalaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
