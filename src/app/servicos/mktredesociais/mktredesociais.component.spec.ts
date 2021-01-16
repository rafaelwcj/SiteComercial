import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MktredesociaisComponent } from './mktredesociais.component';

describe('MktredesociaisComponent', () => {
  let component: MktredesociaisComponent;
  let fixture: ComponentFixture<MktredesociaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MktredesociaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MktredesociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
