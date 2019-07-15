import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplieofmoneyPage } from './addplieofmoney.page';

describe('AddplieofmoneyPage', () => {
  let component: AddplieofmoneyPage;
  let fixture: ComponentFixture<AddplieofmoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplieofmoneyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplieofmoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
