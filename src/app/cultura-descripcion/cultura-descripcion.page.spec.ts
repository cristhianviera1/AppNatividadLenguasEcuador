import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaDescripcionPage } from './cultura-descripcion.page';

describe('CulturaDescripcionPage', () => {
  let component: CulturaDescripcionPage;
  let fixture: ComponentFixture<CulturaDescripcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaDescripcionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaDescripcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
