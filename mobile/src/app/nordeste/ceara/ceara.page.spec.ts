import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CearaPage } from './ceara.page';

describe('CearaPage', () => {
  let component: CearaPage;
  let fixture: ComponentFixture<CearaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CearaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
