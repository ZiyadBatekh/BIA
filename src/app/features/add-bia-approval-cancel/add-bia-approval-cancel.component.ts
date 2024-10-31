import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BusinessImpactAnalysisService } from '../../core/services/business-impact-analysis.service';
import { BiaApproval } from '../../core/models/bia-approval.model';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-add-bia-approval-cancel',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf],
  templateUrl: './add-bia-approval-cancel.component.html',
  styleUrl: './add-bia-approval-cancel.component.scss'
})
export class AddBiaApprovalCancelComponent {
  cancelBiaForm: FormGroup;
  approvals: BiaApproval[] = [];

  constructor(
    private fb: FormBuilder,
    private biaService: BusinessImpactAnalysisService
  ) {
    this.cancelBiaForm = this.fb.group({
      id: [null, Validators.required],
      reason: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadBiaApprovals();
  }

  // Load all approvals that are eligible for cancellation
  loadBiaApprovals(): void {
    this.approvals = this.biaService.getBiaApprovals().filter(approval => approval.status !== 'Cancelled');
  }

  // Cancel the selected approval
  onCancelApproval(): void {
    if (this.cancelBiaForm.valid) {
      const { id, reason } = this.cancelBiaForm.value;
      this.biaService.cancelBiaApproval(id, reason);
      alert('BIA Approval Cancelled Successfully!');
      this.cancelBiaForm.reset();
      this.loadBiaApprovals(); // Reload the approvals to remove the cancelled one
    }
  }
}
