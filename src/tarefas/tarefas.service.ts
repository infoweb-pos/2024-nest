import { Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { TarefaEntity } from './entities/tarefa.entity';

@Injectable()
export class TarefasService {
  tarefas: TarefaEntity[] = [];

  create(createTarefaDto: CreateTarefaDto) {
    const tarefa = {
      id: this.tarefas.length + 1,
      ...createTarefaDto,
    };
    this.tarefas.push(tarefa);
    return {
      estado: 'ok',
      dados: tarefa,
    };
  }

  findAll() {
    return {
      estado: 'ok',
      dados: this.tarefas,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} tarefa`;
  }

  update(id: number, updateTarefaDto: UpdateTarefaDto) {
    return `This action updates a #${id} tarefa`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarefa`;
  }
}
