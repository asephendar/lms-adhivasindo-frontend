import api from './api';
import { Module, ApiListResponse, ApiResponse } from '../types';

export interface ModuleFilters {
  search?: string;
  category?: string;
  status?: string;
  page?: number;
  limit?: number;
}

export const moduleService = {
  getModules: async (filters: ModuleFilters = {}): Promise<ApiListResponse<Module>> => {
    const params = new URLSearchParams();
    if (filters.search) params.append('search', filters.search);
    if (filters.category) params.append('category', filters.category);
    if (filters.status) params.append('status', filters.status);
    if (filters.page) params.append('page', filters.page.toString());
    if (filters.limit) params.append('limit', filters.limit.toString());

    const response = await api.get<ApiListResponse<Module>>(`/modules?${params.toString()}`);
    return response.data;
  },

  getModule: async (id: number): Promise<ApiResponse<Module>> => {
    const response = await api.get<ApiResponse<Module>>(`/modules/${id}`);
    return response.data;
  },

  createModule: async (data: Partial<Module>): Promise<ApiResponse<Module>> => {
    const response = await api.post<ApiResponse<Module>>('/modules', data);
    return response.data;
  },

  updateModule: async (id: number, data: Partial<Module>): Promise<ApiResponse<Module>> => {
    const response = await api.put<ApiResponse<Module>>(`/modules/${id}`, data);
    return response.data;
  },

  deleteModule: async (id: number): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/modules/${id}`);
    return response.data;
  }
};
