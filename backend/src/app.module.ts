import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { UserauthModule } from './userauth/userauth.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { AuthService } from './auth/auth.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [UserModule, AuthModule, UserauthModule],
  controllers: [],
  providers: [
    AuthService,
    PrismaService,
   
  ],
})
export class AppModule {}
