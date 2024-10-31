export interface BiaApproval {
    id: number;
    name: string;
    status: string;
    dateCreated: Date;
    reasonForCancellation?: string; // Optional, only used for canceled approvals
    // Add more fields as seen in the images if needed
  }