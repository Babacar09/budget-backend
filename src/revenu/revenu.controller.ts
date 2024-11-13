import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RevenuService } from './revenu.service';
import { CreateRevenuDto } from './dto/create.revenu.dto';
import { Revenu } from './entities/revenu.entities';
import { UpdateRevenuDto } from './dto/update.revenu.dto';


@Controller('Revenu')
export class RevenuController {
  constructor(private readonly revenuService: RevenuService) {}

  // Créer une nouvelle dépense
  @Post()
  async create(@Body() createDepenseDto: CreateRevenuDto): Promise<Revenu> {
    return this.revenuService.create(createDepenseDto);
  }

  // Récupérer toutes les dépenses
  @Get()
  async findAll(): Promise<Revenu[]> {
    return this.revenuService.findAll();
  }

  // Récupérer une dépense par ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Revenu> {
    return this.revenuService.findOne(id);
  }

  // Mettre à jour une dépense
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDepenseDto: UpdateRevenuDto,
  ): Promise<Revenu> {
    return this.revenuService.update(id, updateDepenseDto);
  }

  // Supprimer une dépense
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.revenuService.remove(id);
  }
}
