import axios from 'axios';
import { apiCall } from '../customApiCalls';
import { API_ENDPOINTS } from '../apiConfig';

export const getDepartments = async (
  token: string
): Promise<IDepartmentResponse> => {
  return await apiCall(
    API_ENDPOINTS.QUICK_ACTIONS.GetActionDepartments,
    'GET',
    undefined,
    token
  );
};

export const getCategories = async (
  token: string
): Promise<ICategoryResponse> => {
  return await apiCall(
    API_ENDPOINTS.QUICK_ACTIONS.GetActionCatagories,
    'GET',
    undefined,
    token
  );
};

export const getSubCategories = async (
  token: string
): Promise<ISubCategoryResponse> => {
  return await apiCall(
    API_ENDPOINTS.QUICK_ACTIONS.GetActionSubacategories,
    'GET',
    undefined,
    token
  );
};

// department quick actions
interface IDepartmentResponse extends genericResponse {
  data: { id: number; icon: string; title: string; description: string };
}
export interface genericResponse {
  status: string;
  message: string;
}

interface ICategoryResponse extends genericResponse {
  data: {
    departmentId: number;
    categories: [
      {
        category: {
          id: number;
          title: string;
          createdAt: Date;
          updatedAt: Date;
          subTitle: string | null;
          image: string | null;
        };
      }
    ];
  };
}

interface ISubCategoryResponse extends genericResponse {
  data: {
    departmentId: string;
    categoryId: string;
    subCategories: [
      {
        id: number;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
      }
    ];
  };
}
