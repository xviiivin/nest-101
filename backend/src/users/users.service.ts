import { PrismaService } from 'src/prisma.service';
import { Users } from './users.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  //   getalluser
  async getAllUser(): Promise<Users[]> {
    return this.prisma.user.findMany();
  }

  //   getUserbyid
  async getUser(id: number): Promise<Users | null> {
    return this.prisma.user.findUnique({ where: { id: Number(id) } });
  }
  // createuser
  async createUser(data: Users): Promise<Users> {
    return this.prisma.user.create({ data });
  }
  //   updateUser
  async updateUser(id: number, data: Users): Promise<Users> {
    return this.prisma.user.update({
      where: { id: Number(id) },
      data: { name: data.name, lname: data.lname },
    });
  }
  //   deleteUser
  async deleteUser(id: number): Promise<Users> {
    return this.prisma.user.delete({
      where: { id: Number(id) },
    });
  }
}
