import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspiritoSantoPage } from './espirito-santo.page';

describe('EspiritoSantoPage', () => {
  let component: EspiritoSantoPage;
  let fixture: ComponentFixture<EspiritoSantoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EspiritoSantoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
