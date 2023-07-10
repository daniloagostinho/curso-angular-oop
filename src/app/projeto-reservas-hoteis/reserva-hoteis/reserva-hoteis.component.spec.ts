import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaHoteisComponent } from './reserva-hoteis.component';

describe('ReservaHoteisComponent', () => {
  let component: ReservaHoteisComponent;
  let fixture: ComponentFixture<ReservaHoteisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservaHoteisComponent]
    });
    fixture = TestBed.createComponent(ReservaHoteisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
