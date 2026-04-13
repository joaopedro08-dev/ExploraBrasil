import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmazonasPage } from './amazonas.page';

describe('AmazonasPage', () => {
  let component: AmazonasPage;
  let fixture: ComponentFixture<AmazonasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
