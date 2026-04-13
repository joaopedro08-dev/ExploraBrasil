import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoiasPage } from './goias.page';

describe('GoiasPage', () => {
  let component: GoiasPage;
  let fixture: ComponentFixture<GoiasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GoiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
