import { Prisma } from "@prisma/client";
import prisma from "../configs/prisma.config";

export type createBlogType = Prisma.Args<typeof prisma.bLOGS, "create">["data"];

export type updateBlogType = Prisma.Args<typeof prisma.bLOGS, "update">["data"];
