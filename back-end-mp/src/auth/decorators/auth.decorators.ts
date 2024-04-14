import { UseGuards, applyDecorators } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { TypeRole } from "../auth.interface";
import { JwtAuthguard } from "../guards/jwt.guard";
import { OnlyAdminGuard } from "../guards/admin.guard";

export const Auth = (role: TypeRole = 'user') => 
    applyDecorators(
        role == 'admin'
        ? UseGuards(JwtAuthguard, OnlyAdminGuard)
        : UseGuards(JwtAuthguard)
    )
