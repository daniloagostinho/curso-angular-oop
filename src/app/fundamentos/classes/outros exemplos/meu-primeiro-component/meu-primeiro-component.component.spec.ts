import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroComponentComponent } from './meu-primeiro-component.component';

describe('MeuPrimeiroComponentComponent', () => {
  let component: MeuPrimeiroComponentComponent;
  let fixture: ComponentFixture<MeuPrimeiroComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeuPrimeiroComponentComponent]
    });
    fixture = TestBed.createComponent(MeuPrimeiroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
