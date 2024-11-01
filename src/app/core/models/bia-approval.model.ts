export interface BiaApproval {
  id: number;
  name: string;
  status: string;
  dateCreated: Date;
  reasonForCancellation?: string; // Optional if not always needed
  startDate?: string; // Optional date field
  endDate?: string; // Optional date field
}
