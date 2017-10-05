import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundopostComponent } from './segundopost.component';

describe('SegundopostComponent', () => {
  let component: SegundopostComponent;
  let fixture: ComponentFixture<SegundopostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundopostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundopostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
