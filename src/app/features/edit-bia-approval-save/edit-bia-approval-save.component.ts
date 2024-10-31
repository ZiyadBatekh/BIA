import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BusinessImpactAnalysisService } from '../../core/services/business-impact-analysis.service';
import { ActivatedRoute } from '@angular/router';
import { BiaApproval } from '../../core/models/bia-approval.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-bia-approval-save',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit-bia-approval-save.component.html',
  styleUrl: './edit-bia-approval-save.component.scss'
})
export class EditBiaApprovalSaveComponent {
  editBiaForm: FormGroup;
  approvalId: number;
  approvalData?: BiaApproval;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private biaService: BusinessImpactAnalysisService
  ) {
    this.editBiaForm = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      reasonForCancellation: ['']
    });

    // Fetch the ID from the route params
    this.approvalId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.loadApprovalData();
  }

  // Loads the approval data into the form
  loadApprovalData(): void {
    const approval = this.biaService.getBiaApproval(this.approvalId);
    if (approval) {
      this.approvalData = approval;
      this.editBiaForm.patchValue({
        name: approval.name,
        status: approval.status,
        reasonForCancellation: approval.reasonForCancellation || ''
      });
    }
  }

  // Method to save edited data
  onSave(): void {
    if (this.editBiaForm.valid) {
      const updatedData = this.editBiaForm.value;
      this.biaService.editBiaApproval(this.approvalId, updatedData);
      alert('BIA Approval Updated Successfully!');
    }
  }
}
