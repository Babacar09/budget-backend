import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Revenu } from './entities/revenu.entities';
import { CreateRevenuDto } from './dto/create.revenu.dto';
import { UpdateRevenuDto } from './dto/update.revenu.dto';

@Injectable()
export class RevenuService {
    constructor( 
        @InjectRepository(Revenu)
        private readonly depenseRepository: Repository<Revenu>
    ) {}

  async create(createDepenseDto: CreateRevenuDto): Promise<Revenu> {
    const depense = this.depenseRepository.create(createDepenseDto);
    return this.depenseRepository.save(depense);
  }

  async findAll(): Promise<Revenu[]> {
    return this.depenseRepository.find();
  }

  async findOne(id: number): Promise<Revenu> {
    return this.depenseRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDepenseDto: UpdateRevenuDto): Promise<Revenu> {
    await this.depenseRepository.update(id, updateDepenseDto);
    return this.findOne(id); 
  }

  async remove(id: number): Promise<void> {
    await this.depenseRepository.delete(id);
  }

}
