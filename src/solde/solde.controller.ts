import { Controller, Get, Post } from '@nestjs/common';
import { SoldeService } from './solde.service';
import { DepenseService } from 'src/depense/depense.service';
import { Depense } from 'src/depense/entities/depense.entities';
import { Solde } from './entities/solde.entites';

@Controller('solde')
export class SoldeController {
  

  constructor(private readonly soldeService: SoldeService ) {}

  @Get()
  async getSolde() {
    const solde = await this.soldeService.calculateSolde();
    return { solde };
  }

  

  @Post()
  async postSolde() {
    const solde = await this.soldeService.calculateSolde();
    return { solde };
  }
}
