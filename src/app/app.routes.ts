import { Routes } from '@angular/router';
import { AddBiaApprovalComponent } from './features/add-bia-approval/add-bia-approval.component';
import { EditBiaApprovalSaveComponent } from './features/edit-bia-approval-save/edit-bia-approval-save.component';

export const routes: Routes = [
  { path: '',  pathMatch: 'full', component: AddBiaApprovalComponent  },  // Default route

 
];
