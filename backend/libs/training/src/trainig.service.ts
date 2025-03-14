import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TrainingService {
  private readonly logger = new Logger(TrainingService.name);

  constructor() {} // private readonly userRepository: UserRepository,
}
