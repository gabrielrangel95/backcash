import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostempresaComponent } from './postempresa.component';

describe('PostempresaComponent', () => {
  let component: PostempresaComponent;
  let fixture: ComponentFixture<PostempresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostempresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
