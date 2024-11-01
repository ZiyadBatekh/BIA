import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BusinessImpactAnalysisService } from '../../core/services/business-impact-analysis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BiaApproval } from '../../core/models/bia-approval.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-bia-approval-save',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit-bia-approval-save.component.html',
  styleUrls: ['./edit-bia-approval-save.component.scss']
})
export class EditBiaApprovalSaveComponent {
  editBiaForm: FormGroup;
  approvalId: number;
  approvalData?: BiaApproval;
  showCancelPopup: boolean = false;
  alert: string = "";

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private biaService: BusinessImpactAnalysisService
  ) {
    this.editBiaForm = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      reasonForCancellation: [''],
      startDate: ['', Validators.required], // Add startDate control
      endDate: ['', Validators.required] // Add endDate control
    });

    this.approvalId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.loadApprovalData();
  }

  loadApprovalData(): void {
    const approval = this.biaService.getBiaApproval(this.approvalId);
    if (approval) {
      this.approvalData = approval;
      this.editBiaForm.patchValue({
        name: approval.name,
        status: approval.status,
        reasonForCancellation: approval.reasonForCancellation || '',
        startDate: approval.startDate || '', // Load start date
        endDate: approval.endDate || '' // Load end date
      });
    }
  }

  onSave(): void {
    if (this.editBiaForm.valid) {
      const updatedData = this.editBiaForm.value;
      this.biaService.editBiaApproval(this.approvalId, updatedData);
      this.alert = 'BIA Approval Updated Successfully!';
    }
  }

  // Trigger the popup
  onCancel(): void {
    this.showCancelPopup = true;
  }

  // Confirm the cancellation
  confirmCancel(): void {
    this.showCancelPopup = false;
    this.router.navigate(['/bia-approvals']); // Navigate to the main page
  }

  // Dismiss the popup
  dismissCancel(): void {
    this.showCancelPopup = false;
  }
}
