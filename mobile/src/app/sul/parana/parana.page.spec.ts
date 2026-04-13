import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParanaPage } from './parana.page';

describe('ParanaPage', () => {
  let component: ParanaPage;
  let fixture: ComponentFixture<ParanaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
