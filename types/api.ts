export interface ApiError {
  statusCode: number;
  error: string;
  message: string;
  validation?: {
    body?: {
      source: string;
      keys: string[];
      message: string;
    };
  };
}

export interface ApiSuccess {
  message: string;
}
