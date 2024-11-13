import { Module } from '@nestjs/common';
import { RevenuService } from './revenu.service';
import { RevenuController } from './revenu.controller';
import { Revenu } from './entities/revenu.entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Revenu])],
  providers: [RevenuService],
  controllers: [RevenuController]
})
export class RevenuModule {}
