import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillSetPage } from './skill-set.page';

describe('SkillSetPage', () => {
  let component: SkillSetPage;
  let fixture: ComponentFixture<SkillSetPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(SkillSetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
