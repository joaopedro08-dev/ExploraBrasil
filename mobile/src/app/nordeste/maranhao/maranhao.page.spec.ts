import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaranhaoPage } from './maranhao.page';

describe('MaranhaoPage', () => {
  let component: MaranhaoPage;
  let fixture: ComponentFixture<MaranhaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MaranhaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
