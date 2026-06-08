import { ApiError, errorHandler } from "common-microservices-utils";
import cors from "cors";
import { config } from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { API_ENDPOINTS, API_ERRORS, PORT } from "./constants/app.constant";
import SchoolRoutes from "./routes/school.route";
import CMSPageRouter from "./routes/cmspage.route";

config();
const app = express();
const port = parseInt(process.env.PORT || "") || PORT;

app.use(API_ENDPOINTS.BASE, express.static("public", { dotfiles: "allow" }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.json(),
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
      throw new ApiError(StatusCodes.BAD_REQUEST, API_ERRORS.SEND_PROPER_JSON);
    }
    return next();
  },
);

app.use(API_ENDPOINTS.BASE, SchoolRoutes);
app.use(API_ENDPOINTS.BASE, CMSPageRouter);

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return errorHandler(err, req, res, next);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
