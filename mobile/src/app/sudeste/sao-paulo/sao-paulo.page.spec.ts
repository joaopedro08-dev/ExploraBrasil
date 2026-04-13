import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaoPauloPage } from './sao-paulo.page';

describe('SaoPauloPage', () => {
  let component: SaoPauloPage;
  let fixture: ComponentFixture<SaoPauloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SaoPauloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
