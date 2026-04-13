import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlagoasPage } from './alagoas.page';

describe('AlagoasPage', () => {
  let component: AlagoasPage;
  let fixture: ComponentFixture<AlagoasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlagoasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
