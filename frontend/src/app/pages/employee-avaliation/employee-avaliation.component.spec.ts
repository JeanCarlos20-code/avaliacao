import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAvaliationComponent } from './employee-avaliation.component';

describe('EmployeeAvaliationComponent', () => {
  let component: EmployeeAvaliationComponent;
  let fixture: ComponentFixture<EmployeeAvaliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeAvaliationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAvaliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
