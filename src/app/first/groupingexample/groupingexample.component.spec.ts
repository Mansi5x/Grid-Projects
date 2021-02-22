import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupingexampleComponent } from './groupingexample.component';

describe('GroupingexampleComponent', () => {
  let component: GroupingexampleComponent;
  let fixture: ComponentFixture<GroupingexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupingexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupingexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
