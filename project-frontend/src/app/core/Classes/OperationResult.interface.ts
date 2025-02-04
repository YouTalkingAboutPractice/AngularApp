export interface OperationResult {
  status: OperationStatus;
  recordsAffected: number;
  exceptionMessage: string | null;
  resourceName: string;
  operationPerformed: OperationType;
  data: any | null; // Use a generic type for data
}

export enum OperationStatus {
  Success = 0,
  Failure = 1,
  NotFound = 2,
  UnknownException = 3,
}

export enum OperationType {
  Insert = 'Insert',
  Update = 'Update',
  Delete = 'Delete',
  Get = 'Get',
}
