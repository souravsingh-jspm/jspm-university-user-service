import { Prisma } from "@prisma/client";
import prisma from "../configs/prisma.config";

export type createNewsType = Prisma.Args<typeof prisma.nEWS, "create">["data"];

export type updateNewsType = Prisma.Args<typeof prisma.nEWS, "update">["data"];
