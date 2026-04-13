import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmapaPage } from './amapa.page';

describe('AmapaPage', () => {
  let component: AmapaPage;
  let fixture: ComponentFixture<AmapaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AmapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
