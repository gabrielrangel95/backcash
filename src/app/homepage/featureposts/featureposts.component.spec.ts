import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturepostsComponent } from './featureposts.component';

describe('FeaturepostsComponent', () => {
  let component: FeaturepostsComponent;
  let fixture: ComponentFixture<FeaturepostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturepostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturepostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
