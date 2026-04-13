import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatoGrossoPage } from './mato-grosso.page';

describe('MatoGrossoPage', () => {
  let component: MatoGrossoPage;
  let fixture: ComponentFixture<MatoGrossoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MatoGrossoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
