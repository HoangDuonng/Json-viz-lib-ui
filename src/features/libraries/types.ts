export interface LibraryFeedItem {
  id: string;
  slug: string;
  title: string;
  authorName: string;
  submittedAt: string | null;
  fileName: string;
  rawUrl: string;
  sourceUrl: string;
  installUrl: string;
  itemCount: number | null;
  itemNames: string[];
}

export interface LibrariesApiResponse {
  items: LibraryFeedItem[];
  total: number;
  page: number;
  pageSize: number;
  source: {
    owner: string;
    repo: string;
    path: string;
    ref: string;
  };
}
