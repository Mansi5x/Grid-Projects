import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestComponent } from './nest.component';

describe('NestComponent', () => {
  let component: NestComponent;
  let fixture: ComponentFixture<NestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
