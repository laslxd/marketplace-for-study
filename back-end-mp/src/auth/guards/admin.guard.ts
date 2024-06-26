import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { validate } from "class-validator";
import { Observable } from "rxjs";

@Injectable()
export class OnlyAdminGuard implements CanActivate {
canActivate(
    context: ExecutionContext
): boolean {
    const request = context.switchToHttp().getRequest<{user: User}>()
    const user = request.user

    if(!user.isAdmin) throw new ForbiddenException('У вас нет прав')

    return user.isAdmin
}
}