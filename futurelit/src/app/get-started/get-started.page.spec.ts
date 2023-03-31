import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetStartedPage } from './get-started.page';

describe('GetStartedPage', () => {
  let component: GetStartedPage;
  let fixture: ComponentFixture<GetStartedPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(GetStartedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
