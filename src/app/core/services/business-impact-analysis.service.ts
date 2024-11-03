import { Injectable } from '@angular/core';
import { BiaApproval } from '../models/bia-approval.model';

@Injectable({
  providedIn: 'root',
})
export class BusinessImpactAnalysisService {
  private biaApproval: BiaApproval = new BiaApproval();

  constructor() {
    
  }

  // Returns the BIA approval.
  getBiaApproval(): BiaApproval {
    return this.biaApproval;
  }

  // Adds a new BIA approval.
  saveBiaApproval(newApproval: BiaApproval): void {
    this.biaApproval = newApproval;
  }
}
