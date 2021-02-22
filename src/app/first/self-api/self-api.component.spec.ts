import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfAPIComponent } from './self-api.component';

describe('SelfAPIComponent', () => {
  let component: SelfAPIComponent;
  let fixture: ComponentFixture<SelfAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
