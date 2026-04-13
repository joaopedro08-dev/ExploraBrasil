import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinasGeraisPage } from './minas-gerais.page';

describe('MinasGeraisPage', () => {
  let component: MinasGeraisPage;
  let fixture: ComponentFixture<MinasGeraisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MinasGeraisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
