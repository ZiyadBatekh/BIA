import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BusinessImpactAnalysisService } from '../../core/services/business-impact-analysis.service';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NgForOf } from '@angular/common';
import Swal from 'sweetalert2';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';


@Component({
  selector: 'app-add-bia-approval',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, NgForOf,  TranslocoModule],
  templateUrl: './add-bia-approval.component.html',
  styleUrls: ['./add-bia-approval.component.scss']
})
export class AddBiaApprovalComponent implements OnInit {
  addBiaForm: FormGroup;
  authors = ['Author 1', 'Author 2', 'Author 3'];
  reviewers = ['Reviewer 1', 'Reviewer 2', 'Reviewer 3'];
  alertMessage:string = ''

  constructor(
    private fb: FormBuilder,
    private biaService: BusinessImpactAnalysisService,
    private router: Router,
    private translocoService: TranslocoService // Inject the service
  ) {
    // Initialize form group with required fields and validation
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
    // Check local storage for draft version
    const draftData = localStorage.getItem('biaApprovalDraft');
    if (draftData) {
      // If there is a draft version, bind from it
      this.addBiaForm.patchValue(JSON.parse(draftData));
    } else {
      // Otherwise, get the latest approval data from the API service
      const latestApproval = this.biaService.getBiaApproval();
      if (latestApproval) {
        this.addBiaForm.patchValue(latestApproval);
      }
    }
  }

   // Language switch method
   switchLanguage(lang: string): void {
    this.translocoService.setActiveLang(lang);
  }

  onSave(): void {
    if (this.addBiaForm.valid) {
      // Call service to save the object
      const newApproval = this.addBiaForm.value;
      this.biaService.saveBiaApproval(newApproval);
  
      // Remove draft version from local storage after saving
      localStorage.removeItem('biaApprovalDraft');
      
      // Show success alert using SweetAlert2
      Swal.fire({
        title: 'Success!',
        text: 'Saved Successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  }

  onSaveDraft(): void {
    // Save an object on the component level without going to the API
    if (this.addBiaForm.valid) {
      const draftData = this.addBiaForm.value;

      // Save the draftData to local storage
      localStorage.setItem('biaApprovalDraft', JSON.stringify(draftData));
    }
  }

  onCancel(): void {
    const draftData = localStorage.getItem('biaApprovalDraft');
    if (draftData) {
      // Show confirmation dialog using SweetAlert2
      Swal.fire({
        title: 'Are you sure?',
        text: 'You have unsaved changes. Do you want to cancel?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: "#5b008a",
        cancelButtonColor: "#d33",
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          // If confirmed, reset the form
          this.addBiaForm.reset();
        }
      });
    } else {
      // Otherwise, redirect to the home page
      this.router.navigate(["/"]);
    }
  }
  
}
