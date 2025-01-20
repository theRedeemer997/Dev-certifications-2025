import { Response } from "express";

const httpResponse = (
  status: number,
  message: string,
  data: any,
  res: Response
) => {
  res.status(status).json({
    message,
    data,
  });
};

export default httpResponse;
