import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteinstitucionaisComponent } from './siteinstitucionais.component';

describe('SiteinstitucionaisComponent', () => {
  let component: SiteinstitucionaisComponent;
  let fixture: ComponentFixture<SiteinstitucionaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteinstitucionaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteinstitucionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
