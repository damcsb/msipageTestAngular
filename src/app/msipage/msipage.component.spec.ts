import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsipageComponent } from './msipage.component';

describe('MsipageComponent', () => {
  let component: MsipageComponent;
  let fixture: ComponentFixture<MsipageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsipageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsipageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
