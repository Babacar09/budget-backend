import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DepenseService } from './depense.service';
import { CreateDepenseDto } from './dto/create.depense.dto';
import { Depense } from './entities/depense.entities';
import { UpdateDepenseDto } from './dto/update.depense.dto';


@Controller('depenses')
export class DepenseController {
  constructor(private readonly depenseService: DepenseService) {}

  // Créer une nouvelle dépense
  @Post('/create')
  async create(@Body() createDepenseDto: CreateDepenseDto): Promise<Depense> {
    return this.depenseService.create(createDepenseDto);
  }

  // Récupérer toutes les dépenses
   @Get()
   async findAll(): Promise<Depense[]> {
     return this.depenseService.findAll();
   }


  // @Get()
  // async getAllDepense(): Promise<Depense[]> {
  //   return this.depenseService.getAll();
  //}

  

  // Récupérer une dépense par ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Depense> {
    return this.depenseService.findOne(id);
  }

  // Mettre à jour une dépense
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDepenseDto: UpdateDepenseDto,
  ): Promise<Depense> {
    return this.depenseService.update(id, updateDepenseDto);
  }

  // Supprimer une dépense
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.depenseService.remove(id);
  }


}
