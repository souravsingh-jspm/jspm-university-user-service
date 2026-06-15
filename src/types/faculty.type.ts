import { Prisma } from "@prisma/client";
import prisma from "../configs/prisma.config";

export type createFacultyType = Prisma.Args<
  typeof prisma.faculty,
  "create"
>["data"];

export type updateFacultyType = Prisma.Args<
  typeof prisma.faculty,
  "update"
>["data"];
