import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateSearchOrderComponent } from './add-update-search-order.component';

describe('AddUpdateSearchOrderComponent', () => {
  let component: AddUpdateSearchOrderComponent;
  let fixture: ComponentFixture<AddUpdateSearchOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateSearchOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateSearchOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
