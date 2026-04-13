import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TocantinsPage } from './tocantins.page';

describe('TocantinsPage', () => {
  let component: TocantinsPage;
  let fixture: ComponentFixture<TocantinsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TocantinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
