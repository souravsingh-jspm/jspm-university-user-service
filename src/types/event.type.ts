import { Prisma } from "@prisma/client";
import prisma from "../configs/prisma.config";

export type createEventType = Prisma.Args<
  typeof prisma.eVENTS,
  "create"
>["data"];

export type updateEventType = Prisma.Args<
  typeof prisma.eVENTS,
  "update"
>["data"];
