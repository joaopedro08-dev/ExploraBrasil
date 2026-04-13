import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SantacatarinaPage } from './santacatarina.page';

describe('SantacatarinaPage', () => {
  let component: SantacatarinaPage;
  let fixture: ComponentFixture<SantacatarinaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SantacatarinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
