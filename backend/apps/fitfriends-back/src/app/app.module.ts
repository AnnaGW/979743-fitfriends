import { Module } from '@nestjs/common';
import { UserModule } from '@backend/user';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
