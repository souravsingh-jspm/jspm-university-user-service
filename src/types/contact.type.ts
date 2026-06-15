import { Prisma } from "@prisma/client";
import prisma from "../configs/prisma.config";

export type createContactType = Prisma.Args<
  typeof prisma.contact,
  "create"
>["data"];

export type updateContactType = Prisma.Args<
  typeof prisma.contact,
  "update"
>["data"];
