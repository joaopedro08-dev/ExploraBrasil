import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiauiPage } from './piaui.page';

describe('PiauiPage', () => {
  let component: PiauiPage;
  let fixture: ComponentFixture<PiauiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PiauiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
