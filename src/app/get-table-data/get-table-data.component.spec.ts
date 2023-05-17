import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTableDataComponent } from './get-table-data.component';

describe('GetTableDataComponent', () => {
  let component: GetTableDataComponent;
  let fixture: ComponentFixture<GetTableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTableDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
