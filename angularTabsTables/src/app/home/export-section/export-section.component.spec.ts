import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportSectionComponent } from './export-section.component';

describe('ExportSectionComponent', () => {
  let component: ExportSectionComponent;
  let fixture: ComponentFixture<ExportSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
