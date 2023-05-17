import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExtComponent } from './button-ext.component';

describe('ButtonExtComponent', () => {
  let component: ButtonExtComponent;
  let fixture: ComponentFixture<ButtonExtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonExtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
