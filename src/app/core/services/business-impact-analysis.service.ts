import { Injectable } from '@angular/core';
import { BiaApproval } from '../models/bia-approval.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessImpactAnalysisService {

  constructor() { }
  private biaApprovals: BiaApproval[] = [
    { id: 1, name: 'Initial BIA Approval', status: 'Approved', dateCreated: new Date() },
    { id: 2, name: 'Second BIA Approval', status: 'Pending', dateCreated: new Date() },
    // Add more sample data as needed
  ];

  // Returns the full list of BIA approvals.
  getBiaApprovals(): BiaApproval[] {
    return this.biaApprovals;
  }

   // Adds a new BIA approval.
   addBiaApproval(newApproval: BiaApproval): void {
    this.biaApprovals.push(newApproval);
  }

  // Updates the specific properties of a BIA approval based on the ID. The updatedApproval parameter is partial, so only certain fields need to be provided.
  editBiaApproval(id: number, updatedApproval: Partial<BiaApproval>): BiaApproval | undefined {
    const approvalIndex = this.biaApprovals.findIndex(approval => approval.id === id);
    if (approvalIndex !== -1) {
      this.biaApprovals[approvalIndex] = { ...this.biaApprovals[approvalIndex], ...updatedApproval };
      return this.biaApprovals[approvalIndex];
    }
    return undefined;
  }

  // Marks an approval as "Cancelled" and sets a reason for cancellation.
  cancelBiaApproval(id: number, reason: string): BiaApproval | undefined {
    const approvalIndex = this.biaApprovals.findIndex(approval => approval.id === id);
    if (approvalIndex !== -1) {
      this.biaApprovals[approvalIndex] = {
        ...this.biaApprovals[approvalIndex],
        status: 'Cancelled',
        reasonForCancellation: reason,
      };
      return this.biaApprovals[approvalIndex];
    }
    return undefined;
  }
}
