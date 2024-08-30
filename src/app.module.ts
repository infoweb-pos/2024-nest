import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefasModule } from './tarefas/tarefas.module';
import { PersistenciaModule } from './persistencia/persistencia.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';

@Module({
  imports: [TarefasModule, PersistenciaModule, AutenticacaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
