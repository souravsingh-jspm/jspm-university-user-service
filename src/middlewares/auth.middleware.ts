import {
  API_ERRORS,
  ROLES,
  STRINGS,
  AUTH_SERVICE,
} from "../constants/app.constant";
import { NextFunction } from "express";
import { GetVerificationKey, expressjwt } from "express-jwt";
import { expressJwtSecret } from "jwks-rsa";
import { ApiError } from "common-microservices-utils";
import { StatusCodes } from "http-status-codes";

export const authUser = () => {
  return (req: any, res: any, next: NextFunction) => {
    return expressjwt({
      secret: expressJwtSecret({
        jwksUri: AUTH_SERVICE,
        cache: true,
        rateLimit: true,
      }) as GetVerificationKey,
      algorithms: ["RS256"],
      requestProperty: STRINGS.USER,
    })(req, res, (err: any) => {
      if (err) return next(err);
      if (req.user?.role !== ROLES.USER) {
        return next(
          new ApiError(
            StatusCodes.UNAUTHORIZED,
            API_ERRORS.YOU_DO_NOT_HAVE_PERMISSION,
          ),
        );
      }
      next();
    });
  };
};

export const authAdmin = () => {
  return (req: any, res: any, next: NextFunction) => {
    return expressjwt({
      secret: expressJwtSecret({
        jwksUri: AUTH_SERVICE,
        cache: true,
        rateLimit: true,
      }) as GetVerificationKey,
      algorithms: ["RS256"],
      requestProperty: STRINGS.USER,
    })(req, res, (err: any) => {
      if (err) return next(err);
      if (req.user?.role !== ROLES.ADMIN) {
        return next(
          new ApiError(
            StatusCodes.UNAUTHORIZED,
            API_ERRORS.YOU_DO_NOT_HAVE_PERMISSION,
          ),
        );
      }
      next();
    });
  };
};

export const authSuperAdmin = () => {
  return (req: any, res: any, next: NextFunction) => {
    return expressjwt({
      secret: expressJwtSecret({
        jwksUri: AUTH_SERVICE,
        cache: true,
        rateLimit: true,
      }) as GetVerificationKey,
      algorithms: ["RS256"],
      requestProperty: STRINGS.USER,
    })(req, res, (err: any) => {
      if (err) return next(err);
      if (req.user?.role !== ROLES.SUPER_ADMIN) {
        return next(
          new ApiError(
            StatusCodes.UNAUTHORIZED,
            API_ERRORS.YOU_DO_NOT_HAVE_PERMISSION,
          ),
        );
      }
      next();
    });
  };
};

export const auth = () => {
  return (req: any, res: any, next: NextFunction) => {
    return expressjwt({
      secret: expressJwtSecret({
        jwksUri: AUTH_SERVICE,
        cache: true,
        rateLimit: true,
      }) as GetVerificationKey,
      algorithms: ["RS256"],
      requestProperty: STRINGS.USER,
    })(req, res, (err: any) => {
      if (err) return next(err);
      next();
    });
  };
};

export const authorizeAll = (allowedRoles?: string[]) => {
  return (req: any, res: any, next: NextFunction) => {
    return expressjwt({
      secret: expressJwtSecret({
        jwksUri: AUTH_SERVICE,
        cache: true,
        rateLimit: true,
      }) as GetVerificationKey,
      algorithms: ["RS256"],
      requestProperty: STRINGS.USER,
    })(req, res, (err: any) => {
      if (err) return next(err);

      if (!allowedRoles || allowedRoles.length === 0) {
        return next();
      }

      if (!allowedRoles.includes(req.user?.role)) {
        return next(
          new ApiError(
            StatusCodes.UNAUTHORIZED,
            API_ERRORS.YOU_DO_NOT_HAVE_PERMISSION,
          ),
        );
      }
      next();
    });
  };
};
