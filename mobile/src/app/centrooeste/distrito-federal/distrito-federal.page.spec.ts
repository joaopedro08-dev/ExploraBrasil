import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DistritoFederalPage } from './distrito-federal.page';

describe('DistritoFederalPage', () => {
  let component: DistritoFederalPage;
  let fixture: ComponentFixture<DistritoFederalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DistritoFederalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
