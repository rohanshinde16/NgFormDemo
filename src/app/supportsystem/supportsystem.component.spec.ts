import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportsystemComponent } from './supportsystem.component';

describe('SupportsystemComponent', () => {
  let component: SupportsystemComponent;
  let fixture: ComponentFixture<SupportsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
