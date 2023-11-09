export type RepositoryContextType = {
  query: string;
  setQuery: (query: string) => void;
  page: number;
  setPage: (page: number) => void;
  data: any;
  isLoading: boolean;
  isError: boolean;
  error: any;
};
