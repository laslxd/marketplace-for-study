import { tr } from "@faker-js/faker";
import { Prisma } from "@prisma/client";
import { returnUserObject } from "src/user/return-user.object";

export const returnReviewObject: Prisma.ReviewSelect = {
   user: {
    select: returnUserObject
   },
   createdAt: true,
   text: true,
   rating: true,
   id: true
}