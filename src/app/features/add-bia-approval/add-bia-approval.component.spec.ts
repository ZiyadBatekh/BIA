import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBiaApprovalComponent } from './add-bia-approval.component';

describe('AddBiaApprovalComponent', () => {
  let component: AddBiaApprovalComponent;
  let fixture: ComponentFixture<AddBiaApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBiaApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBiaApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
