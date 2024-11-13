import { Module } from '@nestjs/common';
import { DepenseService } from './depense.service';
import { DepenseController } from './depense.controller';
import { Depense } from './entities/depense.entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Depense])],
  providers: [DepenseService],
  controllers: [DepenseController]
})
export class DepenseModule {}
