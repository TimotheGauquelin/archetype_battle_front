import apiClient from '../api';

export interface ExampleData {
  id: number;
  name: string;
  description?: string;
}

export const exampleService = {
  getData: async (): Promise<ExampleData[]> => {
    const response = await apiClient.get<ExampleData[]>('/data');
    return response.data;
  },

  getDataById: async (id: number): Promise<ExampleData> => {
    const response = await apiClient.get<ExampleData>(`/data/${id}`);
    return response.data;
  },

  createData: async (data: Omit<ExampleData, 'id'>): Promise<ExampleData> => {
    const response = await apiClient.post<ExampleData>('/data', data);
    return response.data;
  },

  updateData: async (id: number, data: Partial<ExampleData>): Promise<ExampleData> => {
    const response = await apiClient.put<ExampleData>(`/data/${id}`, data);
    return response.data;
  },

  deleteData: async (id: number): Promise<void> => {
    await apiClient.delete(`/data/${id}`);
  },
};

