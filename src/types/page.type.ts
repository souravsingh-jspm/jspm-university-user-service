import { Prisma } from "@prisma/client";
import prisma from "../configs/prisma.config";

export type createCMSPagelType = Prisma.Args<
  typeof prisma.cmsPage,
  "create"
>["data"];

export type updateCMSPagelType = Prisma.Args<
  typeof prisma.cmsPage,
  "update"
>["data"];
