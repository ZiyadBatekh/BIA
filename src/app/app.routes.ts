import { Routes } from '@angular/router';
import { AddBiaApprovalComponent } from './features/add-bia-approval/add-bia-approval.component';
import { AddBiaApprovalCancelComponent } from './features/add-bia-approval-cancel/add-bia-approval-cancel.component';
import { EditBiaApprovalSaveComponent } from './features/edit-bia-approval-save/edit-bia-approval-save.component';

export const routes: Routes = [
  { path: '', redirectTo: '/add-bia-approval', pathMatch: 'full' },  // Default route
  { path: 'add-bia-approval', component: AddBiaApprovalComponent },
  { path: 'add-bia-approval-cancel', component: AddBiaApprovalCancelComponent },
  { path: 'edit-bia-approval-save', component: EditBiaApprovalSaveComponent },
];
