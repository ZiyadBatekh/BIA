import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BusinessImpactAnalysisService } from '../../core/services/business-impact-analysis.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-add-bia-approval',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-bia-approval.component.html',
  styleUrl: './add-bia-approval.component.scss'
})
export class AddBiaApprovalComponent {
  addBiaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.addBiaForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      status: ['', Validators.required],
      dateCreated: [new Date(), Validators.required],
    });
  }

  onSubmit(): void {
    if (this.addBiaForm.valid) {
      const newApproval = this.addBiaForm.value;
      // Save the new approval
      this.addBiaForm.reset({ dateCreated: new Date() });
    }
  }

  // Open the confirmation dialog
  onCancel(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addBiaForm.reset({ dateCreated: new Date() });
      }
    });
  }
}
