import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BahiaPage } from './bahia.page';

describe('BahiaPage', () => {
  let component: BahiaPage;
  let fixture: ComponentFixture<BahiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BahiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
