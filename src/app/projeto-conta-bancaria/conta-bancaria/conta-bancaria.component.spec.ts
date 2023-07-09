import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaBancariaComponent } from './conta-bancaria.component';

describe('ContaBancariaComponent', () => {
  let component: ContaBancariaComponent;
  let fixture: ComponentFixture<ContaBancariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContaBancariaComponent]
    });
    fixture = TestBed.createComponent(ContaBancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
