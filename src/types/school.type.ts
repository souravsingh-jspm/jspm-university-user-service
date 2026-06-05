import { Prisma } from "@prisma/client";
import prisma from "../configs/prisma.config";

export type createSchoolType = Prisma.Args<
  typeof prisma.school,
  "create"
>["data"];

export type updateSchoolType = Prisma.Args<
  typeof prisma.school,
  "update"
>["data"];
