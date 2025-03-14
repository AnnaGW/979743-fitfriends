import { Controller } from '@nestjs/common';
import { TrainingService } from './trainig.service';
@Controller('training')
export class TrainingController {
  constructor(private readonly userService: TrainingService) {}
}
