import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationOtherPeopleComponent } from './evaluation-other-people.component';

describe('EvaluationOtherPeopleComponent', () => {
  let component: EvaluationOtherPeopleComponent;
  let fixture: ComponentFixture<EvaluationOtherPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationOtherPeopleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationOtherPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
