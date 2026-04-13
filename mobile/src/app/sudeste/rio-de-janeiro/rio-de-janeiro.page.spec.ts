import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RioDeJaneiroPage } from './rio-de-janeiro.page';

describe('RioDeJaneiroPage', () => {
  let component: RioDeJaneiroPage;
  let fixture: ComponentFixture<RioDeJaneiroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RioDeJaneiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
