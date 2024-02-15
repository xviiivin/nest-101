import { Injectable } from '@nestjs/common';

export type Userauth = any;

@Injectable()
export class UserauthService {
  private readonly userauth = [
    { userId: 1, username: 'wiwat', password: 'liangkobkit' },
    { userId: 2, username: 'wiranyupa', password: 'petch-in' },
  ];

  async findOne(username: string): Promise<Userauth | undefined> {
    return this.userauth.find((user) => user.username === username);
  }
}
