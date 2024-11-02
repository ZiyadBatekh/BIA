export interface BiaApproval {
  id?: number;
  name?: string;
  status: string;                // Dropdown field in the form
  author: string;                // Dropdown field in the form
  reviewer: string;              // Dropdown field in the form
  agree: string;                 // Dropdown field in the form
  lastReviewDate?: Date;         // Date input field in the form
  nextReviewDate?: Date;         // Date input field in the form
  startDate?: Date;              // Add if needed by your component
  endDate?: Date;                // Add if needed by your component
  dateCreated?: Date;
  reasonForCancellation?: string; // Optional if cancellation is needed
}
