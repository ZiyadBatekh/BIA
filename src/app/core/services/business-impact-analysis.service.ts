import { Injectable } from '@angular/core';
import { BiaApproval } from '../models/bia-approval.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessImpactAnalysisService {
  private biaApprovals: BiaApproval[] = [
    {
      id: 1,
      name: 'Initial BIA Approval',
      status: 'Approved',
      author: 'Author 1',
      reviewer: 'Reviewer 1',
      agree: 'Yes',
      lastReviewDate: new Date(),
      nextReviewDate: new Date(new Date().setMonth(new Date().getMonth() + 6)),
      dateCreated: new Date()
    },
    {
      id: 2,
      name: 'Second BIA Approval',
      status: 'Pending',
      author: 'Author 2',
      reviewer: 'Reviewer 2',
      agree: 'No',
      lastReviewDate: new Date(),
      nextReviewDate: new Date(new Date().setMonth(new Date().getMonth() + 12)),
      dateCreated: new Date()
    }
  ];

  constructor() {}

  // Returns the full list of BIA approvals.
  getBiaApprovals(): BiaApproval[] {
    return this.biaApprovals;
  }

  // Adds a new BIA approval.
  addBiaApproval(newApproval: BiaApproval): void {
    this.biaApprovals.push(newApproval);
  }

  // Retrieves a specific BIA approval based on its ID.
  getBiaApproval(id: number): BiaApproval | undefined {
    return this.biaApprovals.find(approval => approval.id === id);
  }

  // Retrieves the most recently added BIA approval.
  getLatestBiaApproval(): BiaApproval | undefined {
    return this.biaApprovals.length > 0 ? this.biaApprovals[this.biaApprovals.length - 1] : undefined;
  }

  // Updates specific properties of a BIA approval based on its ID.
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
