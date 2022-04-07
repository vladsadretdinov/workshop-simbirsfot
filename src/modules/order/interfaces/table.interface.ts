export interface IGet {
  page?: number;
  offset?: number;
  limit?: number;
  sort?: [];
}

export interface IGetResponse {
  fields: {
    name: string;
    type: string;
    required: boolean;
  };
  count: number;
  data: {
    updatedAt: any;
    createdAt: any;
    name: string;
    id: string;
  }[];
}
