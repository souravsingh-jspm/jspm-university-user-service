import { Prisma } from "@prisma/client";
import prisma from "../configs/prisma.config";

export type createProgramType = Prisma.Args<
  typeof prisma.program,
  "create"
>["data"];

export type updateProgramType = Prisma.Args<
  typeof prisma.program,
  "update"
>["data"];
