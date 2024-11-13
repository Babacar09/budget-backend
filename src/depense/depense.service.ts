import { InjectRepository } from '@nestjs/typeorm';
import { Depense } from './entities/depense.entities';
import { Entity, Repository } from 'typeorm';
import { UpdateDepenseDto } from './dto/update.depense.dto';
import { CreateDepenseDto } from './dto/create.depense.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DepenseService  {
  // findAll(): Depense[] | PromiseLike<Depense[]> {
  //   throw new Error('Method not implemented.');
  // }
    constructor( 
        @InjectRepository(Depense)
        private readonly depenseRepository: Repository<Depense>
    ) {}


  async create(createDepenseDto: CreateDepenseDto): Promise<Depense> {
    const depense = this.depenseRepository.create(createDepenseDto);
    return this.depenseRepository.save(depense);
  }

  

  

  async findAll(): Promise<Depense[]> {
    return this.depenseRepository.find();
  }

  async findOne(id: number): Promise<Depense> {
    return this.depenseRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDepenseDto: UpdateDepenseDto): Promise<Depense> {
    await this.depenseRepository.update(id, updateDepenseDto);
    return this.findOne(id); 
  }

  async remove(id: number): Promise<void> {
    await this.depenseRepository.delete(id);
  }

}
