import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatoGrossoDoSulPage } from './mato-grosso-do-sul.page';

describe('MatoGrossoDoSulPage', () => {
  let component: MatoGrossoDoSulPage;
  let fixture: ComponentFixture<MatoGrossoDoSulPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MatoGrossoDoSulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
