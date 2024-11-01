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
  styleUrls: ['./add-bia-approval.component.scss'] // Note the change here from styleUrl to styleUrls
})
export class AddBiaApprovalComponent {
  addBiaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private biaService: BusinessImpactAnalysisService // Assuming you want to save the data here
  ) {
    this.addBiaForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      status: ['', Validators.required],
      dateCreated: [new Date(), Validators.required],
      startDate: [null, Validators.required], // Add startDate control
      endDate: [null, Validators.required] // Add endDate control
    });
  }

  onSubmit(): void {
    if (this.addBiaForm.valid) {
      const newApproval = this.addBiaForm.value;
      this.biaService.addBiaApproval(newApproval); // Save the new approval
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
