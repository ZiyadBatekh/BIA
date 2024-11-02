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

  authors = ['Author 1', 'Author 2', 'Author 3'];
  reviewers = ['Reviewer 1', 'Reviewer 2', 'Reviewer 3'];
  agreeOptions = ['Yes', 'No'];

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
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      author: ['', Validators.required], // New author field
      reviewer: ['', Validators.required], // New reviewer field
      agree: ['', Validators.required], // New agree field
      lastReviewDate: ['', Validators.required], // New last review date field
      nextReviewDate: ['', Validators.required] // New next review date field
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
        startDate: approval.startDate || '',
        endDate: approval.endDate || '',
        author: approval.author || '', // Set author if available
        reviewer: approval.reviewer || '', // Set reviewer if available
        agree: approval.agree || '', // Set agree option if available
        lastReviewDate: approval.lastReviewDate || '', // Set last review date
        nextReviewDate: approval.nextReviewDate || '' // Set next review date
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

  onCancel(): void {
    this.showCancelPopup = true;
  }

  confirmCancel(): void {
    this.showCancelPopup = false;
    this.router.navigate(['/bia-approvals']);
  }

  dismissCancel(): void {
    this.showCancelPopup = false;
  }
}
