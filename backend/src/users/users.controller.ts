import {
  Get,
  Body,
  Post,
  Param,
  Delete,
  Patch,
  Put,
  Controller,
  Req,
  Res,
} from '@nestjs/common';
import { UserService } from './users.service';
import { Users } from './users.model';
import { Request, Response } from 'express';
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() userdata: Users,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Users> {
    try {
      const users = await this.userService.createUser(userdata);

      response.status(200).json({
        status: 'ok!',
        message: 'create user done!',
        result: users,
      });
    } catch (error) {
      console.error(error);
      response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }

    return;
  }

  @Get()
  async getAllUser(@Req() request: Request, @Res() response: Response) {
    try {
      const users = await this.userService.getAllUser();

      response.status(200).json({
        status: 'ok!',
        message: 'All users',
        result: users,
      });
    } catch (error) {
      console.error(error);
      response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }
  }
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<Users> {
    return this.userService.getUser(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() userdata: Users,
  ): Promise<Users> {
    return this.userService.updateUser(id, userdata);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<Users> {
    return this.userService.deleteUser(id);
  }
}
