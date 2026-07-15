export interface User {
  id: number;
  name: string;
  email: string;
  created_at?: string;
}

export interface Module {
  id: number;
  title: string;
  category: string;
  description: string;
  instructor: string;
  image_url?: string;
  duration?: string;
  status: string;
  created_by: number;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export interface ApiListResponse<T> {
  success: boolean;
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
