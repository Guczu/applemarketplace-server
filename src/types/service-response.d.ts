interface ServiceAPIResponse<T> {
    body: T | ErrorResponse;
    statusCode: number;
    headers?: Object;
}

interface ErrorResponse {
    error: string;
}
  
  export { ServiceAPIResponse }