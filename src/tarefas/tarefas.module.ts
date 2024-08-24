import { Module } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { TarefasController } from './tarefas.controller';
import { PersistenciaModule } from 'src/persistencia/persistencia.module';

@Module({
  controllers: [TarefasController],
  providers: [TarefasService],
  imports: [PersistenciaModule],
})
export class TarefasModule {}
