import { Routes } from '@angular/router';
import { AddBiaApprovalComponent } from './features/add-bia-approval/add-bia-approval.component';
import { SettingsComponent } from './features/users/components/settings/settings.component';
import { HomeComponent } from './shared/components/home/home.component';
import { PlansComponent } from './shared/components/plans/plans.component';
import { OperationsComponent } from './shared/components/operations/operations.component';
import { RisksComponent } from './shared/components/risks/risks.component';
import { InstitutionDataComponent } from './shared/components/institution-data/institution-data.component';
import { UsersComponent } from './core/auth/components/users/users.component';
import { ReportsComponent } from './shared/components/reports/reports.component';
import { InstitutionsComponent } from './shared/components/institutions/institutions.component';
import { AwarnessTrainingComponent } from './shared/components/awarness-training/awarness-training.component';
import { NotificationsComponent } from './shared/components/notifications/notifications.component';
import { TaskManagmentComponent } from './shared/components/task-managment/task-managment.component';

export const routes: Routes = [
  { path: '',  pathMatch: 'full', component: HomeComponent  },  // Default route
  {path:'plans', component:PlansComponent},
  {path:'operations', component:OperationsComponent},
  { path: 'bia-analysis',   component: AddBiaApprovalComponent  },
  {path:'risks', component:RisksComponent},
  {path:'institution-data', component:InstitutionDataComponent},
  {path:'users', component:UsersComponent},
  {path:'reports', component:ReportsComponent},
  {path:'institution', component:InstitutionsComponent},
  {path:'awarness-training', component:AwarnessTrainingComponent},
  {path:'notifications', component:NotificationsComponent},
  {path:'task-management', component:TaskManagmentComponent},
  {path:'settings', component:SettingsComponent},

 
];
