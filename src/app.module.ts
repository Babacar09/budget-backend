import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RevenuModule } from './revenu/revenu.module';
import { DepenseModule } from './depense/depense.module';
import { SoldeModule } from './solde/solde.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revenu } from './revenu/entities/revenu.entities';
import { Depense } from './depense/entities/depense.entities';
import { Solde } from './solde/entities/solde.entites';

@Module({
  imports: [RevenuModule, DepenseModule, SoldeModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'budget',
      entities: [Revenu, Depense, Solde],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
