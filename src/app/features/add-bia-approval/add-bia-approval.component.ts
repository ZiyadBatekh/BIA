import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BusinessImpactAnalysisService } from '../../core/services/business-impact-analysis.service';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import Swal from 'sweetalert2';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-add-bia-approval',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, NgForOf, NgIf, NgClass],
  templateUrl: './add-bia-approval.component.html',
  styleUrls: ['./add-bia-approval.component.scss']
})
export class AddBiaApprovalComponent implements OnInit {
  addBiaForm: FormGroup;
  authors = ['Author 1', 'Author 2', 'Author 3'];
  reviewers = ['Reviewer 1', 'Reviewer 2', 'Reviewer 3'];
  alertMessage: string = '';
  currentLang: string;

  constructor(
    private fb: FormBuilder,
    private biaService: BusinessImpactAnalysisService,
    private dialog: MatDialog,
    private router: Router,
    private translocoService: TranslocoService // Inject the service
  ) {
    this.currentLang = this.translocoService.getActiveLang(); // Get the current language

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
      this.addBiaForm.patchValue(JSON.parse(draftData));
    } else {
      const latestApproval = this.biaService.getBiaApproval();
      if (latestApproval) {
        this.addBiaForm.patchValue(latestApproval);
      }
    }
  }

  switchLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translocoService.setActiveLang(this.currentLang);
  }

  getTranslation(key: string): string {
    return this.translocoService.translate(key);
  }

  onSave(): void {
    if (this.addBiaForm.valid) {
      const newApproval = this.addBiaForm.value;
      this.biaService.saveBiaApproval(newApproval);
      localStorage.removeItem('biaApprovalDraft');
      
      Swal.fire({
        title: this.getTranslation('success.title'), // Use translation for success title
        text: this.getTranslation('success.message'), // Use translation for success message
        icon: 'success',
        confirmButtonText: this.getTranslation('button.ok') // Use translation for button text
      });
    }
  }

  onSaveDraft(): void {
    if (this.addBiaForm.valid) {
      const draftData = this.addBiaForm.value;
      localStorage.setItem('biaApprovalDraft', JSON.stringify(draftData));
    }
  }

  onCancel(): void {
    const draftData = localStorage.getItem('biaApprovalDraft');
    if (draftData) {
      Swal.fire({
        title: this.getTranslation('confirm.title'), // Use translation for confirmation title
        text: this.getTranslation('confirm.message'), // Use translation for confirmation message
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: "#5b008a",
        cancelButtonColor: "#d33",
        confirmButtonText: this.getTranslation('button.confirm'), // Use translation for confirm button
        cancelButtonText: this.getTranslation('button.cancel') // Use translation for cancel button
      }).then((result) => {
        if (result.isConfirmed) {
          this.addBiaForm.reset();
        }
      });
    } else {
      this.router.navigate(["/"]);
    }
  }
}
