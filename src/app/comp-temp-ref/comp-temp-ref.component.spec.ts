import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTempRefComponent } from './comp-temp-ref.component';

describe('CompTempRefComponent', () => {
  let component: CompTempRefComponent;
  let fixture: ComponentFixture<CompTempRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompTempRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompTempRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
