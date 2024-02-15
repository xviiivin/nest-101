import { Module } from '@nestjs/common';
import { UserauthService } from './userauth.service';

@Module({
  providers: [UserauthService],
  exports: [UserauthService],
})
export class UserauthModule {}
