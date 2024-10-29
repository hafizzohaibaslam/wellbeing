export interface Blog {
  id: number;
  title: string;
  publishedAt: string;
  deccription: string;
  image: {
    url: string;
  }
  categories: Category[];
  author: string;
}

export interface Category {
  id: number;
  title: string;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface BlogsResponse {
    data: Blog[];
    meta: Meta;
}

export interface BlogResponse {
  data: Blog;
}