import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcrePage } from './acre.page';

describe('AcrePage', () => {
  let component: AcrePage;
  let fixture: ComponentFixture<AcrePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
