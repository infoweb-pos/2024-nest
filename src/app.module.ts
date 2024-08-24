import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefasModule } from './tarefas/tarefas.module';
import { PersistenciaModule } from './persistencia/persistencia.module';

@Module({
  imports: [TarefasModule, PersistenciaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
