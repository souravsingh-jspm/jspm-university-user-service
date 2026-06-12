import { Prisma } from "@prisma/client";
import prisma from "../configs/prisma.config";

export type createSPageContentBlockType = Prisma.Args<
  typeof prisma.pageContentBlock,
  "create"
>["data"];

export type updateSPageContentBlockType = Prisma.Args<
  typeof prisma.pageContentBlock,
  "update"
>["data"];
