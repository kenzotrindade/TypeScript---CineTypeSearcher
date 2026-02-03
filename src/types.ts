export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

export interface MovieResponse {
  Search?: Movie[];
  Response: string;
  Error?: string;
}
