import { User } from "./User.ts";

export interface UserProfile {
    id: string;
    bio?: string;
    avatarUrl?: string;
    userId: string;
    user: User; // Relation to the User model
  }