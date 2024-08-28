import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCpfComponent } from './home-cpf.component';

describe('HomeCpfComponent', () => {
  let component: HomeCpfComponent;
  let fixture: ComponentFixture<HomeCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCpfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
