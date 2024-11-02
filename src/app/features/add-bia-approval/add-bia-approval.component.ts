import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BusinessImpactAnalysisService } from '../../core/services/business-impact-analysis.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { BiaApproval } from '../../core/models/bia-approval.model';

@Component({
  selector: 'app-add-bia-approval',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-bia-approval.component.html',
  styleUrls: ['./add-bia-approval.component.scss']
})
export class AddBiaApprovalComponent implements OnInit {
  addBiaForm: FormGroup;
  authors = ['Author 1', 'Author 2', 'Author 3'];
  reviewers = ['Reviewer 1', 'Reviewer 2', 'Reviewer 3'];

  constructor(
    private fb: FormBuilder,
    private biaService: BusinessImpactAnalysisService,
    private dialog: MatDialog
  ) {
    this.addBiaForm = this.fb.group({
      status: ['', Validators.required],
      author: ['', Validators.required],
      reviewer: ['', Validators.required],
      agree: ['', Validators.required],
      lastReviewDate: [null, Validators.required],
      nextReviewDate: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    const latestApproval = this.biaService.getLatestBiaApproval();
    if (latestApproval) {
      this.addBiaForm.patchValue(latestApproval);
    }
  }

  onSubmit(): void {
    if (this.addBiaForm.valid) {
      const newApproval = this.addBiaForm.value;
      this.biaService.addBiaApproval(newApproval);
      this.addBiaForm.reset();
    }
  }

  onSaveDraft() {
    if (this.addBiaForm.valid) {
      const draftData = this.addBiaForm.value;

      // Save the draftData to local storage or send it to a service
      localStorage.setItem('biaApprovalDraft', JSON.stringify(draftData));
      
      // Optionally, show a success message or notification
      console.log('Draft saved', draftData);
    } else {
      console.log('Form is not valid, cannot save draft.');
    }
  }

  onCancel(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addBiaForm.reset();
      }
    });
  }
}
