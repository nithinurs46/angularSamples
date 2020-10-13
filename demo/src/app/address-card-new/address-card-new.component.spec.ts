import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCardNewComponent } from './address-card-new.component';

describe('AddressCardNewComponent', () => {
  let component: AddressCardNewComponent;
  let fixture: ComponentFixture<AddressCardNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressCardNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressCardNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
