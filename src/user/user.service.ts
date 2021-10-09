import { CreateUserDto } from '@app/user/dto/createUser.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async createUser(dto: CreateUserDto) {
    return dto;
  }
}
