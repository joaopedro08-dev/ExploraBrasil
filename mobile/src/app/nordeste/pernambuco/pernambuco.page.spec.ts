import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PernambucoPage } from './pernambuco.page';

describe('PernambucoPage', () => {
  let component: PernambucoPage;
  let fixture: ComponentFixture<PernambucoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PernambucoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
