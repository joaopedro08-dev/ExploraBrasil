import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParaPage } from './para.page';

describe('ParaPage', () => {
  let component: ParaPage;
  let fixture: ComponentFixture<ParaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
