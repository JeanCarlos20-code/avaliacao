import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCnpjComponent } from './home-cnpj.component';

describe('HomeCnpjComponent', () => {
  let component: HomeCnpjComponent;
  let fixture: ComponentFixture<HomeCnpjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCnpjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
