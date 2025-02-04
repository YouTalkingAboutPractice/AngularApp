export interface UserToken {
  token: string;
  userName: string;
  validity: number; // Using number for TimeSpan in milliseconds
  refreshToken: string;
  id: string; // Using string for Guid
  emailId: string;
  guidId: string; // Using string for Guid
  expiredTime: Date;
  role: string;
  name: string;
}
