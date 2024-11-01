import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BusinessImpactAnalysisService } from '../../core/services/business-impact-analysis.service';

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
    private biaService: BusinessImpactAnalysisService
  ) {
    // Initialize the form
    this.addBiaForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      status: ['', Validators.required],
      dateCreated: [new Date(), Validators.required] // Initialize with current date
    });
  }

  // Method to submit the form data
  onSubmit(): void {
    if (this.addBiaForm.valid) {
      const newApproval = this.addBiaForm.value;
      this.biaService.addBiaApproval(newApproval);
      alert('BIA Approval Added Successfully!');
      this.addBiaForm.reset({ dateCreated: new Date() });
    }
  }
}
