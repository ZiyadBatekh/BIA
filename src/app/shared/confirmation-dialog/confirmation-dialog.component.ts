import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [],
  template: `
    <h2 mat-dialog-title>Cancel Confirmation</h2>
    <div mat-dialog-content>
      <p>Do you want to cancel?</p>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-button color="warn" (click)="onConfirm()">Confirm</button>
    </div>
  `,
  styles: [
    `
      h2 {
        margin: 0;
        color: #d32f2f;
      }
      p {
        font-size: 16px;
      }
      button {
        font-weight: bold;
      }
    `,
  ],
})

export class ConfirmationDialogComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
