import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturasPage } from './culturas.page';

describe('CulturasPage', () => {
  let component: CulturasPage;
  let fixture: ComponentFixture<CulturasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
