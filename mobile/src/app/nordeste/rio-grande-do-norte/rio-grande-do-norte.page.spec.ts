import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RioGrandeDoNortePage } from './rio-grande-do-norte.page';

describe('RioGrandeDoNortePage', () => {
  let component: RioGrandeDoNortePage;
  let fixture: ComponentFixture<RioGrandeDoNortePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RioGrandeDoNortePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
