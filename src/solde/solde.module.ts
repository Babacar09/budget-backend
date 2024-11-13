import { Module } from '@nestjs/common';
import { SoldeController } from './solde.controller';
import { SoldeService } from './solde.service';
import { Solde } from './entities/solde.entites';
import { Depense } from 'src/depense/entities/depense.entities';
import { Revenu } from 'src/revenu/entities/revenu.entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Solde, Depense, Revenu])],
  controllers: [SoldeController],
  providers: [SoldeService]
})
export class SoldeModule {}
