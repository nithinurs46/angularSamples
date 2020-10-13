import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNew1Component } from './comp-new1.component';

describe('CompNew1Component', () => {
  let component: CompNew1Component;
  let fixture: ComponentFixture<CompNew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompNew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompNew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
