import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcadastroComponent } from './dialogcadastro.component';

describe('DialogcadastroComponent', () => {
  let component: DialogcadastroComponent;
  let fixture: ComponentFixture<DialogcadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogcadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
