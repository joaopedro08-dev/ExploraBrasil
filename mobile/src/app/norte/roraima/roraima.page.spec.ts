import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoraimaPage } from './roraima.page';

describe('RoraimaPage', () => {
  let component: RoraimaPage;
  let fixture: ComponentFixture<RoraimaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoraimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
