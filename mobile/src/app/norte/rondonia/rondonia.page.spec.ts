import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RondoniaPage } from './rondonia.page';

describe('RondoniaPage', () => {
  let component: RondoniaPage;
  let fixture: ComponentFixture<RondoniaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RondoniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
