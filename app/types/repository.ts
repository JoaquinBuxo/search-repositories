export interface Owner {
  login: string;
  avatar_url: string;
}

export interface Repository {
  id: number;
  name: string;
  description: string;
  owner: Owner;
  created_at: string;
  updated_at: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  html_url: string;
}

export interface RepositoriesResponse {
  data: Repository[];
  totalPages: number;
}
