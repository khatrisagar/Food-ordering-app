import { Response } from "express";

export class APIResponse {
  res: Response;
  statusCode: number;
  responseData: any;
  pagination?: any;
  constructor(
    res: Response,
    statusCode: number,
    responseData: any,
    pagination?: any
  ) {
    this.statusCode = statusCode;
    this.responseData = responseData;
    this.res = res;
    this.pagination = pagination;
  }

  success() {
    return this.res
      .status(this.statusCode)
      .json({ data: this.responseData, pagination: this.pagination });
  }
  failed() {
    return this.res
      .status(this.statusCode)
      .json({ message: this.responseData?.message });
  }
}
