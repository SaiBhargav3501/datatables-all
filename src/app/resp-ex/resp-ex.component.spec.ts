import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespExComponent } from './resp-ex.component';

describe('RespExComponent', () => {
  let component: RespExComponent;
  let fixture: ComponentFixture<RespExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
