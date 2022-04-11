export interface IGet {
  page?: number;
  offset?: number;
  limit?: number;
  sort?: [];
}

export interface ICityGetResponseItem {
  updatedAt: number;
  createdAt: number;
  name: string;
  id: string;
}

export interface ICityGetResponse {
  count: number;
  data: ICityGetResponseItem[];
}

export interface ICityPointsResponse {
  count: number;
  data: {
    name: string;
    cityId: {
      name: string;
      id: string;
    };
    address: string;
    id: string;
  }[];
}
