import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParaibaPage } from './paraiba.page';

describe('ParaibaPage', () => {
  let component: ParaibaPage;
  let fixture: ComponentFixture<ParaibaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaibaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
