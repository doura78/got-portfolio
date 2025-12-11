import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentList } from './continent-list';

describe('ContinentList', () => {
  let component: ContinentList;
  let fixture: ComponentFixture<ContinentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinentList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinentList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
