import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBiaApprovalSaveComponent } from './edit-bia-approval-save.component';

describe('EditBiaApprovalSaveComponent', () => {
  let component: EditBiaApprovalSaveComponent;
  let fixture: ComponentFixture<EditBiaApprovalSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBiaApprovalSaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBiaApprovalSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
