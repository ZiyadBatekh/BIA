import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBiaApprovalCancelComponent } from './add-bia-approval-cancel.component';

describe('AddBiaApprovalCancelComponent', () => {
  let component: AddBiaApprovalCancelComponent;
  let fixture: ComponentFixture<AddBiaApprovalCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBiaApprovalCancelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBiaApprovalCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
