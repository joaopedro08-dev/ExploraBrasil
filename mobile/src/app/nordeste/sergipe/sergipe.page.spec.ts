import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SergipePage } from './sergipe.page';

describe('SergipePage', () => {
  let component: SergipePage;
  let fixture: ComponentFixture<SergipePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SergipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
