import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MktgoogleComponent } from './mktgoogle.component';

describe('MktgoogleComponent', () => {
  let component: MktgoogleComponent;
  let fixture: ComponentFixture<MktgoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MktgoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MktgoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
