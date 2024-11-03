export type QueryResponse<T> = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Array<T> | [];
  total_pages: number;
  total_results: number;
};
