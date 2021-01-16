import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojavirtuaisComponent } from './lojavirtuais.component';

describe('LojavirtuaisComponent', () => {
  let component: LojavirtuaisComponent;
  let fixture: ComponentFixture<LojavirtuaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojavirtuaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojavirtuaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
