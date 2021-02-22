import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedgridComponent } from './nestedgrid.component';

describe('NestedgridComponent', () => {
  let component: NestedgridComponent;
  let fixture: ComponentFixture<NestedgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
